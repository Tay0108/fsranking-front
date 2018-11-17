import React, { Component } from 'react';
import './error404.scss';

class Error404 extends Component {

    render() {
        return(
            <div className="error">
            <h3 className="error__title">Error 404</h3>
            <p className="error__description">Ups! Szukana strona nie zostala znaleziona.</p>
            </div>
        );
    }

}

export default Error404;
