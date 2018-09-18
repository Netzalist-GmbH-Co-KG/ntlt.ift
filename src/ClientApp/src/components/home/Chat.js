// components/Home/chat.tsx
import React, { Component } from 'react';
import moment from 'moment';

export class Chat extends Component {

    constructor() {
        super();
        this.state = { messages: [], currentMessage: '' };

        this.handleMessageRef = this.handleMessageRef.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.addMessage = this.addMessage.bind(this);
    }

    render() {
        return (<div className='panel panel-default'>
            <div className='panel-body panel-chat'
                ref={this.handlePanelRef}>
                <ul>
                    {this.state.messages.map(message =>
                        <li key={message.id}><strong>{message.sender} </strong>
                            ({moment(message.date).format('HH:mm:ss')})<br />
                            {message.message}</li>
                    )}
                </ul>
            </div>
            <div className='panel-footer'>
                <form className='form-inline' onSubmit={this.onSubmit}>
                    <label className='sr-only' htmlFor='msg'>Message</label>
                    <div className='input-group col-md-12'>
                        <button className='chat-button input-group-addon'>:-)</button>
                        <input type='text' value={this.state.currentMessage}
                            onChange={this.handleMessageChange}
                            className='form-control'
                            id='msg'
                            placeholder='Your message'
                            ref={this.handleMessageRef} />
                        <button className='chat-button input-group-addon'>Send</button>
                    </div>
                </form>
            </div>
        </div>);
    }

    handleMessageRef(input) {
        this.msg = input;
    }

    handleMessageChange(event) {
        this.setState({ currentMessage: event.target.value });
    }

    onSubmit(event) {
        this.addMessage();
        event.preventDefault();
        return false;
    }

    addMessage() {
        let msg = this.state.messages;
        let id = this.state.messages.length;
        msg.push({ id: id, date: new Date(), message: this.state.currentMessage })
        this.setState({
            messages: msg,
            currentMessage: ''
        });
        this.msg.focus();
    }
}