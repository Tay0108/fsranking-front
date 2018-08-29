import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={ {minHeight: '100vh'} }>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
