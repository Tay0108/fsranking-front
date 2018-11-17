import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Player from './components/Player/Player';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Error404 from './components/Errors/Error404';

class App extends Component {

  render() {

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/player/:id' component={Player} />
          <Route path='/about' component={About} />
          <Route exact path='/' component={Home} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
