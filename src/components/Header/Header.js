import React, { Component } from 'react';
import './header.scss';

export class AppHeader extends Component {

  render() {
    return (
      <div className="header-wrapper">
        <header className="app-header">
          <img className="app-header__logo" src="/img/app-logo.png" alt="app-logo" />
          <div className="app-header__title-wrapper">
            <h1 className="app-header__title">FSRanking</h1>
            <span className="app-header__subtitle">Polski Ranking Freestyle Football</span>
          </div>
        </header>
      </div>
    )
  }
}

export default AppHeader;
