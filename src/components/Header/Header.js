import React, { Component } from 'react';
import './header.scss';

export class AppHeader extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="app-header">
        <img className="app-header__logo" src="/img/app-logo.png" />
        <div className="app-header__title-wrapper">
          <h1 className="app-header__title">FSRanking</h1>
          <span className="app-header__subtitle">Polski Ranking Freestyle Football</span>
        </div>
        <a href="/">home</a>           
        <a href="/about">about</a>           
      </header>
    )
  }
}

export default AppHeader;
