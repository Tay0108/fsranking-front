import React, { Component } from 'react';
import './banner.scss';

class Banner extends Component {
  
    constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="banner">
        <ul className="banner__list">
          <li className="banner__item"><a href=""><img src="#"/></a></li>
          <li className="banner__item"><a href=""><img src="#"/></a></li>
          <li className="banner__item"><a href=""><img src="#"/></a></li>
        </ul>
      </section>
    )
  }
}

export default Banner;
