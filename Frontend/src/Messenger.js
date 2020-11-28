import React, {Component} from 'react';
import Conversations from "./Conversations";
import './App.css';
import Chat from "./Chat";

class Messenger extends Component {

    constructor(props) {
        super(props);

        this.state = {
            chatId: null
        };

        this.chatIdReceiveHandler = this.chatIdReceiveHandler.bind(this);
        this.chatClosed = this.chatClosed.bind(this);
    }

    chatIdReceiveHandler(id) {
        this.setState({
            chatId: id
        });
    }
    
    chatClosed() {
        this.setState({
            chatId: null
        });
    }

	render() {
		return (
		    <div className='Messenger'>
            {
                this.state.chatId ?
                    <Chat token={this.props.token} id={this.state.chatId} onClose={this.chatClosed}/> :
                    <Conversations token={this.props.token} handler={this.chatIdReceiveHandler}/>
            }
            </div>
		);
	}
}

export default Messenger;
