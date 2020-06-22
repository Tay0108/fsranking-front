import React from "react";
import "./top-player.scss";
import { ranking } from "../../mocks/ranking";

export function TopPlayer({ award, playerId }) {
  return (
    <div className="top-player">
      <img
        className="top-player__image"
        src={`/img/players/ranking-player-${playerId}.jpg`}
        alt={`player ${playerId}`}
      />
      <div className="top-player__description">
        <img
          className="top-player__flag"
          src={`/img/flag/${ranking[playerId].nationality}.svg`}
          alt="nationality"
        />
        <h3 className="top-player__name">{ranking[playerId].name}</h3>
        <h4 className={`top-player__points top-player__points--${award}`}>
          {ranking[playerId].points} punktów
        </h4>
        <img
          className={`top-player__ball top-player__ball--${award}`}
          src={`/img/ball-icon-${award}.svg`}
          alt={award}
        />
      </div>
    </div>
  );
}
