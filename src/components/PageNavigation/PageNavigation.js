import React from "react";
import "./page-navigation.scss";
import { NavLink } from "react-router-dom";

export function PageNavigation() {
  return (
    <nav className="page-navigation">
        <NavLink
          exact
          key="Ranking"
          to="/"
          className="page-navigation__link"
          activeClassName="page-navigation__link--active"
        >
          Ranking
        </NavLink>
        <NavLink
          exact
          key="Zawodnicy"
          to="/players"
          className="page-navigation__link"
          activeClassName="page-navigation__link--active"
        >
          Zawodnicy
        </NavLink>
        <NavLink
          exact
          key="Turnieje"
          to="/tournaments"
          className="page-navigation__link"
          activeClassName="page-navigation__link--active"
        >
          Turnieje
        </NavLink>
    </nav>
  );
}
