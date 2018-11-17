import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

export class AppHeader extends Component {

  render() {
    return (
      <div className="header-wrapper">
        <header className="app-header">
        <Link to="/"><img className="app-header__logo" src="/img/app-logo.png" alt="app-logo" /></Link>
          <Link to="/" className="app-header__title-wrapper">
            <h1 className="app-header__title">FSRanking</h1>
            <span className="app-header__subtitle">Polski Ranking Freestyle Football</span>
          </Link>
        </header>
      </div>
    )
  }
}

export default AppHeader;
