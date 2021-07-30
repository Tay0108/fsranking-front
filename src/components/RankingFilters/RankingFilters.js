import React, { useState } from "react";
import "./ranking-filters.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Range, createSliderWithTooltip } from "rc-slider";
import "rc-slider/assets/index.css";

const AgeRange = createSliderWithTooltip(Range);

export function RankingFilters({ minPlayerAge, maxPlayerAge, setGender, setCategory }) {
  const [isOpen, setIsOpen] = useState(false);


  if (isOpen) {
    return (<div className="ranking-filters">
      <AgeRange
        min={minPlayerAge}
        max={maxPlayerAge}
      />
      Select gender:
      <button onClick={() => setGender("Male")}>Male</button>
      <button onClick={() => setGender("Female")}>Female</button>
      Select category:
      <button onClick={() => setCategory("Battle")}>Battle</button>
      <button onClick={() => setCategory("Routine")}>Routine</button>
      <button onClick={() => setCategory("Challenge")}>Challenge</button>
      <button onClick={() => setCategory("Iron Man")}>Iron Man</button>
      <button onClick={() => setCategory("Sick 3")}>Sick 3</button>
    </div>);
  } else {
    return (
      <button className="ranking-filters-button" onClick={() => setIsOpen(!isOpen)}>
        Sortowanie domyślne
        <FontAwesomeIcon className="ranking-filters-button__arrow" icon={faChevronDown} />
      </button>
    );
  }
}
