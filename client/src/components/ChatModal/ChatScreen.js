import React, { Component } from "react";
import Chatkit from "@pusher/chatkit";
import MessagesList from "./MessagesList";
import SendMessageForm from "./SendMessageForm";
import TypingIndicator from "./TypingIndicator";
import WhosOnlineList from "./WhosOnlineList";


class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      currentRoom: {},
      messages: [],
      usersWhoAreTyping: [],
      firstRun: true,
      loaded: false,
      latestMsgId: 0
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.sendTypingEvent = this.sendTypingEvent.bind(this);
    this.incNotifCounter = this.props.incNotifCounter.bind(this);
  }

  sendMessage(text) {
    this.state.currentUser.sendMessage({
      text,
      roomId: this.state.currentRoom.id
    });
  }

  sendTypingEvent() {
    this.state.currentUser
      .isTypingIn({ roomId: this.state.currentRoom.id })
      .catch(error => console.log("error", error));
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: "v1:us1:c7ad5921-5ae9-48a8-9316-f0f2eebf4074",
      userId: this.props.id,
      tokenProvider: new Chatkit.TokenProvider({
        url: "/authenticate"
      })
    });

    chatManager
      .connect()
      .then(currentUser => {
        this.setState({ currentUser });
        return currentUser.subscribeToRoom({
          roomId: 13974734,
          messageLimit: 40,
          hooks: {
            onNewMessage: message => {
              const cursor = this.state.currentUser.readCursor({roomId: 13974734})
              this.setState({
                messages: [...this.state.messages, message],
                latestMsgId: message.id
              });
              if (typeof cursor === "undefined") {
                this.state.currentUser.setReadCursor({roomId: 13974734, position: 0})
              }
              else if (message.id > cursor.position) {
                this.incNotifCounter()
              }
            },
            onUserStartedTyping: user => {
              this.setState({
                usersWhoAreTyping: [...this.state.usersWhoAreTyping, user.name]
              });
            },
            onUserStoppedTyping: user => {
              this.setState({
                usersWhoAreTyping: this.state.usersWhoAreTyping.filter(
                  username => username !== user.name
                )
              });
            },
            onUserCameOnline: () => this.forceUpdate(),
            onUserWentOffline: () => this.forceUpdate(),
            onUserJoined: () => this.forceUpdate()
          }
        });
      })
      .then(currentRoom => {
        this.setState({ currentRoom });
        this.setState({loaded: true})
      })
      .catch(error => console.log("error", error));
  }

  setRead() {
    this.state.currentUser.setReadCursor({
      roomId: 13974734,
      position: this.state.latestMsgId
    })
  }

  render() {
    const styles = {
      container: {
        display: "flex",
        flexDirection: "column"
      },
      chatContainer: {
        height: "100%",
        display: "flex",
        flex: 1
      },
      whosOnlineListContainer: {
        width: "230px",
        flex: "none",
        padding: 20,
        backgroundColor: "#2c303b",
        color: "white"
      },
      chatListContainer: {
        height: "50vh",
        width: "700px",
        display: "flex",
        flexDirection: "column"
      }
    };
    return (
      <div>
        {this.state.loaded ? <div style={styles.container}>
          <div style={styles.chatContainer}>
          {this.props.whosOnlineList ? (<aside style={styles.whosOnlineListContainer}>
              <WhosOnlineList
                currentUser={this.state.currentUser}
                users={this.state.currentRoom.users}
              />
            </aside>) : null}
            <section style={styles.chatListContainer} className="elegant-color">
              <MessagesList
                messages={this.state.messages}
                style={styles.chatList}
                currentUser={this.state.currentUser}
              />
              <SendMessageForm
                onSubmit={this.sendMessage}
                onChange={this.sendTypingEvent}
              />
              <div style={{height: "20px"}}>
              <TypingIndicator usersWhoAreTyping={this.state.usersWhoAreTyping} />
              </div>
            </section>
          </div>
        </div> : null}
      </div>
    );
  }
}

export default ChatScreen;
