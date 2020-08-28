import React from "react";
import "./player-card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function PlayerCard({ id, name, nickname, age, image }) {
  return (
    <li className="player-card">
      <Link className="player-card__link" to={`player/${id}`}>
        <img alt={name} className="player-card__image" src={image} />
        <dl className="player-card__info">
          <dt className="info__title">Imię i nazwisko</dt>
          <dd className="info__definition">{name}</dd>
          <dt className="info__title">Pseudonim</dt>
          <dd className="info__definition">{nickname}</dd>
          <dt className="info__title">Wiek</dt>
          <dd className="info__definition">{age}</dd>
        </dl>
        <div className="player-card__arrow">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </Link>
    </li>
  );
}
