import React from "react";
import "./page-navigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export function PageNavigation() {
  return (
    <nav className="page-navigation">
      <h1 className="current-view-name">Ranking</h1>
        <FontAwesomeIcon className="page-navigation__hamburger--closed" icon={faBars}/>
    </nav>
  );
}
