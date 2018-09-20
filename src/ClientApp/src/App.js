import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/home/Home';
import { StartPage } from './components/startpage/StartPage';
import { Trainer } from './components/trainer/Trainer';
import { Student } from './components/student/Student';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={StartPage} />
        <Route path='/chattest' component={Home} />
        <Route path='/trainer' component={Trainer} />
        <Route path='/student' component={Student} />
      </Layout>
    );
  }
}
