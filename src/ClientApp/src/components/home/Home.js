import React, { Component } from 'react';
import { Users } from './Users';
import { Chat } from './Chat';

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
      <div className='row'>
        <div className='col-sm-3'>
          <Users />
        </div>
        <div className='col-sm-9'>
          <Chat />
        </div>
    </div>);
  }
}
