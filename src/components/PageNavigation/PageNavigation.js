import React, { useState } from "react";
import "./page-navigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export function PageNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavigation() {
    setIsOpen(!isOpen);
    const pageHeader = document.getElementById("page-header");
    pageHeader.classList.toggle("page-header--open");
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
              <a
                href="#"
                className="page-navigation__link page-navigation__link--active"
              >
                Ranking
              </a>
              <a href="#" className="page-navigation__link">
                Zawodnicy
              </a>
              <a href="#" className="page-navigation__link">
                Turnieje
              </a>
        </div>
      ) : (
        <>
          <h1 className="current-view-name">
            <span>Ranking</span>
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
