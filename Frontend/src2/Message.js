import {getuser} from "./Api";
import React, {Component} from 'react';

class Message extends Component {
    constructor(props) {
        super(props);
        var t = props.message.timestamp;
        this.state = {
            username: '',
            // time: props.message.timestamp.replace('T', ' ').substr(0, 19)
            time: t//.hours + ':' + t.minutes.substr(-2) + ':' + t.seconds.substr(-2)
        }

    }

    componentDidMount() {
        this.setState({username: this.props.message.user});
        // getuser(this.props.message.user).then(response => {
        //     this.setState({username: response.name});
        // });

    }

    render() {
        return (
            <div className="Message">
                <div className="MessageHeader">
                    <label> {this.state.username} </label>
                    <label> {this.state.time} </label>
                </div>
                <label id="content"> {this.props.message.content} </label>
            </div>
        );
    }



}

export default Message;