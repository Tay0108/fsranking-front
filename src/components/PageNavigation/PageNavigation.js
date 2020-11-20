import React, { useState } from "react";
import "./page-navigation.scss";
import { NavLink, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export function PageNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Ranking", url: "/" },
    { name: "Zawodnicy", url: "/players" },
    { name: "Turnieje", url: "/tournaments" }
  ];

  function toggleNavigation() {
    setIsOpen(!isOpen);
    const pageHeader = document.getElementById("page-header");
    pageHeader.classList.toggle("page-header--open");
  }

  function renderNavLink(navLink) {
    return (
      <NavLink
        exact
        to={navLink.url}
        className="page-navigation__link"
        activeClassName="page-navigation__link--active"
      >
        {navLink.name}
      </NavLink>
    );
  }

  return (
    <nav className="page-navigation">
      {isOpen ? (
        <div className="page-navigation__inner-nav">
          <button
            className="page-navigation__hamburger--open"
            onClick={toggleNavigation}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          {navLinks.map((navLink) => renderNavLink(navLink))}
        </div>
      ) : (
        <>
          <h1 className="current-view-name">
            <span>
              <Switch>
                <Route exact path="/">
                  Ranking
                </Route>
                <Route path="/players">Zawodnicy</Route>
                <Route path="/tournaments">Turnieje</Route>
              </Switch>
            </span>
            <button
              className="page-navigation__hamburger--closed"
              onClick={toggleNavigation}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </h1>
        </>
      )}
    </nav>
  );
}
