import React from "react";
import "./sorting-button.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

export function SortingButton() {
    return <button className="sorting-button">
        Sortowanie domyślne
        <FontAwesomeIcon className="sorting-button__arrow" icon={faChevronDown}/>
    </button>
}