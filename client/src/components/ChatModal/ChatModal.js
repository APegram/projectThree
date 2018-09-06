import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Container,
  Fa
} from "re-pro";
import ChatScreen from "./ChatScreen";
import API from "../../utils/db";
import { OneClickButton } from "../../uncccode";

class ChatModal extends Component {
  constructor(props) {
    super(props);
    this.toggle7 = this.toggle7.bind(this);
    this.toggle8 = this.toggle7.bind(this);
    this.toggleChat = this.toggleChat.bind(this);
    this.toggleWhosOnlineList = this.toggleWhosOnlineList.bind(this);
    this.incNotifCounter = this.incNotifCounter.bind(this);
    this.child = React.createRef()
  }
  state = {
    chatVisible: false,
    whosOnlineList: false,
    loaded: false,
    currentUsername: "",
    id: "",
    notifCounter: 0
  };

  componentWillMount() {
    API.getUser(localStorage.id, data => {
      const fullName = data.fullName;
      const id = data.email;
      this.setState({
        loaded: true,
        currentUsername: fullName,
        id: id
      });
    });
  }

  incNotifCounter() {
    this.setState({
      notifCounter: this.state.notifCounter + 1
    });
  }

  toggle7() {
    this.setState({
      modal7: !this.state.modal7
    });
  }
  toggle8() {
    this.setState({
      modal8: !this.state.modal8
    });
  }
  toggleChat() {
    this.setState({
      chatVisible: !this.state.chatVisible,
      notifCounter: 0
    })
    this.child.current.setRead();
  }
  toggleWhosOnlineList() {
    this.setState({
      whosOnlineList: !this.state.whosOnlineList
    })
  }

  render() {
    return (
      <Container>
        <div className="scrollbar scrollbar-lady-lips" style={this.state.chatVisible ? {display: "inherit"} : {display: "none"}}>
          {this.state.loaded && <Card
            style={{
              position: "fixed",
              bottom: "50px",
              right: "50px",
              zIndex: "100"
            }}
          >
            <CardBody className="elegant-color" style={{padding: 0}}>
              <ChatScreen
                ref={this.child}
                currentUsername={this.state.currentUsername}
                id={this.state.id}
                incNotifCounter={this.incNotifCounter}
                whosOnlineList={this.state.whosOnlineList}
              />
            </CardBody>
            <CardFooter className="elegant-color-dark">
              <div className="float-right">
              <OneClickButton gradient="peach" onClick={this.toggleWhosOnlineList}>
                Online Users
              </OneClickButton>
              <OneClickButton gradient="peach" onClick={this.toggleChat}>
                Close
              </OneClickButton>
              </div>
            </CardFooter>
          </Card>}
        </div>
        <div style={!this.state.chatVisible ? {display: "inherit"} : {display: "none"}}>
          <div style={{ position: "fixed", bottom: "30px", right: "30px", zIndex: "100" }}>
            <a onClick={this.toggleChat} className="comm-ic mr-3">
              <Fa className="blue-text" size="2x" icon="comments-o" />
            </a>
            {this.state.notifCounter === 0 ? null : <span className="counter black-text dusty-grass-gradient">{this.state.notifCounter}</span>}
          </div>
        </div>
      </Container>
    );
  }
}

export default ChatModal;
