// const api = 'http://messenger.westeurope.cloudapp.azure.com/';

let tokens = [{'login': "user", 'password': "password", 'name': "username", 'token': "token"}]
let dialogs = [{
	'id': 1,
	'lastMessage': {
		'user': "defaultUser",
		'content': "msgcontent",
		'timestamp': new Date(1000000000).toDateString()
	}
}]

let mesgs = [
	{
		'user': "defaultUser2",
		'content': "hi",
		'timestamp': new Date(70000000).toDateString(),
		'id': 0
	},
	{
		'user': "defaultUser",
		'content': "hi there",
		'timestamp': new Date(80000000).toDateString(),
		'id': 1
	},
	{
		'user': "defaultUser2",
		'content': "how's it going?",
		'timestamp': new Date(100000000).toDateString(),
		'id': 2
	},
	{
		'user': "defaultUser",
		'content': "nicee",
		'timestamp': new Date(1100000000).toDateString(),
		'id': 3
	}	
]

let loginUser = "username";


export function signup(login, password, name) {
	let model = {
		'login': login,
		'password': password,
		'name': name
	};

	let token = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

	tokens.push({'login': login, 'password': password, 'name': name, 'token': token});

	// let url = api + 'api/authentication/signup';
	console.log("signup");
	loginUser = name;

	// return fetch(url, {
	// 	method: 'POST', 
	// 	headers: {
	// 		'Content-Type' : 'application/json'
	// 	},
	// 	body: JSON.stringify(model)
	// }).then(response => {
	// 	if (response.status >= 200 && response.status <= 299)
	// 		return response.json();
	// 	else
	// 		console.log('error on singup');
	// }).then(response => {
	// 	return response.token;
	// });
	return token;
}

export function signin(login, password) {
	let model = {
		'login': login,
		'password': password
	};

	var result = tokens.find(obj => { return obj.login === login && obj.password === password });
	console.log("signin");

	// let url = api + 'api/authentication/signin';
	// console.log(model, url);
	// return fetch(url, {
	// 	method: 'POST',
	// 	headers: {
	// 		'Content-Type' : 'application/json'
	// 	},
	// 	body: JSON.stringify(model)
	// }).then(response => {
	// 	if (response.status >= 200 && response.status <= 299) {
	// 		// console.log(response.json());
	// 		return response.json();
	// 	} else
	// 		console.log('error on singin');
	// }).then(response => {
	// 	return response.token;
	// });
	return result.token;
}

export function conversations(token) {
	// let url = api + 'api/conversations';

	// return fetch(url, {
	// 	method: 'GET',
	// 	headers: {
	// 		'Content-Type' : 'application/json',
	// 		'Authorization' : 'Bearer ' + token
	// 	}
	// }).then( response => {
	// 	if (response.status >= 200 && response.status <= 299)

	// 		return response.json();
	// 	else
	// 		console.log('error on conversations token ' + localStorage.getItem('token'));
	// });
	console.log("convers");
	dialogs[0].lastMessage = mesgs[mesgs.length - 1];
	return dialogs;
}

export function getmessages(token) {
	// let url = api + 'api/conversations/public/messages?from=0&count=1000';

	// return fetch(url, {
	// 	method: 'GET',
	// 	headers: {
	// 		'Content-Type' : 'application/json',
	// 		'Authorization' : 'Bearer ' + token
	// 	}
	// }).then(response => {
	// 	if (response.status >= 200 && response.status <= 299)
	// 		return response.json();
	// 	else
	// 		console.log('error on getmessages');
	// });
	console.log("getmsgs");
	return mesgs.slice();
}

export function getuser(id) {
	// let url = api + 'api/users/' + id;
	console.log("getuser");
	return id;

	// return fetch(url, {
	// 	method: 'GET',
	// 	headers: {
	// 		'Content-Type' : 'application/json',
	// 		'Authorization' : 'Bearer ' + localStorage.getItem('token')
	// 	}
	// }).then( response => {
	// 	if (response.status >= 200 && response.status <= 299)
	// 		return response.json();
	// 	else
	// 		console.log('error on getuser');
	// });
}

let id = 4;

export function postpublicmessage(message) {
	// let url = api + 'api/conversations/public/messages';
	let model = {
		'content': message
	};

	mesgs.push({'user': loginUser, 'content': message, 'timestamp': new Date().toDateString(), 'id': id});
	id += 1;

	// return fetch(url, {
	// 	method: 'POST',
	// 	headers: {
	// 		'Content-Type' : 'application/json',
	// 		'Authorization' : 'Bearer ' + localStorage.getItem('token')
	// 	},
	// 	body: JSON.stringify(model)
	// }).then( response => {
	// 	if (response.status >= 200 && response.status <= 299)
	// 		return response.json();
	// 	else
	// 		console.log('error on postpublicmessage');
	// });
	console.log("postmsg");
	return "a";
}