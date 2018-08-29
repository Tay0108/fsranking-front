import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-container">
          <h1>Futball spielen</h1>

          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;
