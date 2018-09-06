import React, {Component} from "react";
import "../../scroll.css"

class MessagesList extends Component {
    scrollToBottom() {
        this.scrollTarget.scrollIntoView({behavior: "smooth"})
    }

    componentDidUpdate() {
        this.scrollToBottom()
    }

    render() {
        const styles = {
            container: {
                overflowY: "scroll",
                flex: 1
            },
            ul: {
                listStyle: "none"
            },
            li: {
                marginTop: 13,
                marginBottom: 13,
                color: "white"
            },
            senderUsername: {
                fontWeight: "bold",
            },
            message: { fontSize: 15 }
        }

        return (
            <div className="scrollbar scrollbar-default" style={{
                ...this.props.style,
                ...styles.container
            }}
            >
                <ul style={styles.ul}>
                    {this.props.messages.map((message, index) => (
                        <li key={index} style={styles.li}>
                            <div>
                                <span style={styles.senderUsername}>{message.sender.name}</span>{" "}
                            </div>
                            {/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm.test(message.text) ?
                            <a style={styles.message} href={message.text}>{message.text}</a> : <p style={styles.message}>{message.text}</p>}
                        </li>
                    ))}
                    <div ref={scrollTarget => { this.scrollTarget = scrollTarget; }} />
                </ul>
            </div>
        )
    }
}


export default MessagesList;