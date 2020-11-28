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

        // this.ws = new WebSocket('ws://messenger.westeurope.cloudapp.azure.com/socket/messages?token=' + localStorage.getItem('token'));
        // this.ws.onopen = () => { console.log("opened socket"); };
        // this.ws.onmessage = (message) => {
        //     message = JSON.parse(message.data);
        //     console.log(message.Content);
        //     let newmessage = {
        //         conversationId: message.ConversationId,
        //         timestamp: message.Timestamp,
        //         user: message.User,
        //         content: message.Content,
        //         id: message.Id
        //     };
        //     this.setState(prevState => ({
        //         messages: [newmessage, ...prevState.messages].slice(0, 50)
        //     }));
        // };


        // this.getMessages();
    }

    getMessages() {
        var data = getmessages(this.props.token);
        console.log(data);
        this.setState({messages: data.reverse()});
        // getmessages(this.props.token).then(data => {
        //     this.setState({messages: data.reverse().slice(0, 50)});
        // });
    }

    componentDidMount() {
        this.getMessages();
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onClose}>Go Back</button>
                {/* <BackButton></BackButton> */}
                {/* <form onSubmit={this.handleSubmit} className="SignForm">
                    <input type="text" id="element" placeholder="Login..." onChange={this.handleLoginChange}/>
                    <input type="text" id="element" placeholder="Password..." onChange={this.handlePasswordChange}/>
                    <button type="submit" id="element">Sign In</button>
                </form> */}
                <PostForm onPosted={this.getMessages}/>
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