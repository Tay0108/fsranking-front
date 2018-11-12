import React, { Component } from 'react';
import './home.scss';
import Header from './../Header/Header';
import Ranking from './../Ranking/Ranking';
//import Banner from './../Banner/Banner';
import Footer from './../Footer/Footer';

export class Home extends Component {
  
    constructor(props) {
    super(props);

  }

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
