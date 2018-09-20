import * as signalR from '@aspnet/signalr';

class ChatWebsocketService {
    _connection = null;

    constructor() {

        this._connection = new signalR.HubConnectionBuilder()
        .withUrl("/chat")
        .configureLogging(signalR.LogLevel.Information)
        .build();        
        
        // start connection
        this._connection.start().catch(err => console.error(err, 'red'));
    }

    registerMessageAdded(messageAdded: (msg) => void) {
        // get nre chat message from the server
        this._connection.on('MessageAdded', (message) => {
            messageAdded(message.result);
        });
    }
    sendMessage(message: string) {
        // send the chat message to the server
        this._connection.invoke('AddMessage', message);
    }

    registerUserLoggedOn(userLoggedOn: (user: User) => void) {
        // get new user from the server
        this._connection.on('UserLoggedOn', (user: User) => {
            userLoggedOn(user);
        });
    }
   
}

const WebsocketService = new ChatWebsocketService();

export default WebsocketService;