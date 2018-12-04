import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AppHeader extends Component {

  openMenu() {
    document.querySelector('.page-nav').classList.add('page-nav--open');
    document.querySelector('.app-header__hamburger').classList.add('app-header__hamburger--hidden');
  }

  closeMenu() {
    document.querySelector('.page-nav').classList.remove('page-nav--open');
    document.querySelector('.app-header__hamburger').classList.remove('app-header__hamburger--hidden');
  }

  render() {
    return (
      <div className="header-wrapper">
        <header className="app-header">
          <Link to="/"><img className="app-header__logo" src="/img/app-logo.png" alt="app-logo" /></Link>
          <Link to="/" className="app-header__title-wrapper">
            <h1 className="app-header__title">FSRanking</h1>
            <span className="app-header__subtitle">Polski Ranking Freestyle Football</span>
          </Link>
          <button type="button" className="app-header__hamburger" onClick={this.openMenu}><FontAwesomeIcon icon={faBars} /></button>

          <nav className="page-nav">
            <button type="button" className="page-nav__sharp" onClick={this.closeMenu}><FontAwesomeIcon icon={faTimes} /></button>
            <ul className="page-nav__links">
              <li className="page-nav__link"><Link to="/">Ranking battle</Link></li>
              <li className="page-nav__link"><Link to="/players">Lista zawodników</Link></li>
              <li className="page-nav__link"><Link to="/competitions">Lista zawodów</Link></li>
            </ul>
          </nav>
        </header>
      </div>
    )
  }
}

export default AppHeader;
