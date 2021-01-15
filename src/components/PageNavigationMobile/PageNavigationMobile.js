import React, { useState } from "react";
import "./page-navigation-mobile.scss";
import { NavLink, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export function PageNavigationMobile() {
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
        key={navLink.name}
        to={navLink.url}
        className="page-navigation-mobile__link"
        activeClassName="page-navigation-mobile__link--active"
      >
        {navLink.name}
      </NavLink>
    );
  }

  return (
    <nav className="page-navigation-mobile">
      {isOpen ? (
        <div className="page-navigation-mobile__inner-nav">
          <button
            className="page-navigation-mobile__hamburger--open"
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
                <Route path={["/players", "/player"]}>Zawodnicy</Route>
                <Route path={["/tournament", "/tournaments"]}>Turnieje</Route>
              </Switch>
            </span>
            <button
              className="page-navigation-mobile__hamburger--closed"
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
