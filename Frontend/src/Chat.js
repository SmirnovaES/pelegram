import {getmessages} from "./Api";
import React, {Component} from 'react';
import Message from "./Message";
import PostForm from "./PostForm";

class Chat extends Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: []
        };

        this.getMessages = this.getMessages.bind(this);

        this.ws = new WebSocket('ws://35.228.30.90:8123/socket/messages?token=' + sessionStorage.getItem('token'));
        this.ws.onopen = () => { console.log("opened socket"); };
        this.ws.onmessage = (message) => {
            message = JSON.parse(message.data);
            console.log(message.Content);
            let newmessage = {
                conversationId: message.ConversationId,
                timestamp: message.Timestamp,
                user: message.User,
                content: message.Content,
                id: message.Id
            };
            this.setState(prevState => ({
                messages: [newmessage, ...prevState.messages].slice(0, 50)
            }));
        };


        this.getMessages();
    }

    getMessages() {
        getmessages(this.props.token).then(data => {
            this.setState({messages: data.reverse().slice(0, 50)});
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onClose}>Go Back</button>
                <PostForm/>
                {
                    this.state.messages.map(message => {
                        return (
                            <Message key={message.id} message={message} />
                        );
                    })
                }
            </div>
        );
    }
}

export default Chat;