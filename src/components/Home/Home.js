import React, { Component } from 'react';
import './home.scss';
import Ranking from './../Ranking/Ranking';
//import Banner from './../Banner/Banner';

class Home extends Component {
  
  render() {
    return (
      <article className="home">
      <Ranking />
      {/* <Banner /> */}
      </article>
    )
  }
}

export default Home;
