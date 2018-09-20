import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/home/Home';
import { FetchData } from './components/fetchdata/FetchData';
import { Counter } from './components/counter/Counter';
import { StartPage } from './components/startpage/StartPage';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/startpage' component={StartPage} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} />
      </Layout>
    );
  }
}
