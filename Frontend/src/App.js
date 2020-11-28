import React, { Component } from 'react';
import './App.css'
import Messenger from './Messenger';
import SignIn from './SignIn';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			token: sessionStorage.getItem('token')
		};

		this.tokenReceiveHandler = this.tokenReceiveHandler.bind(this);
	}

	tokenReceiveHandler(token) {
		if (token === undefined)
		{
			return;
		}
		this.setState({
			token: token
		});
		sessionStorage.setItem('token', token);
	}

	render() {
		return (
			<div className='App'>
				<label className='MessengerHeader'> Pelegram </label>
				{
					(this.state.token !== null) ?
					<Messenger token={this.state.token}/> :
					<SignIn onTokenReceive={this.tokenReceiveHandler}/>
				}
			</div>
		);
	}
}

export default App;
