import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Player from './components/Player/Player';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

class App extends Component {

  render() {

    return (
      <div>
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/players/:id' component={Player} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    );
  }
}

export default App;
