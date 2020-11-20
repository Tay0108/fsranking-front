import React from "react";
import "./top-player.scss";
import { Link } from "react-router-dom";

export function TopPlayer({ award, player }) {
  return (
    <Link to={`/player/${player.id}`}>
      <div className="top-player">
        <img
          className="top-player__image"
          src={`/img/players/ranking-player-${player.id}.jpg`}
          alt={`player ${player.id}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/img/players/ranking-player-0.png";
          }}
        />
        <div className="top-player__description">
          <img
            className="top-player__flag"
            src={`/img/flag/${player.nationality.abbreviation}.svg`}
            alt="nationality"
          />
          <h3 className="top-player__name">{`${player.firstName} ${player.lastName}`}</h3>
          <h4 className={`top-player__points top-player__points--${award}`}>
            {player.points} punktów
          </h4>
          <img
            className={`top-player__ball top-player__ball--${award}`}
            src={`/img/ball-icon-${award}.svg`}
            alt={award}
          />
        </div>
      </div>
    </Link>
  );
}
