import React, { useEffect, useState } from "react";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import {
  faInstagram,
  faFacebook,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

import "./player.scss";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export function Player(props) {
  const [player, setPlayer] = useState(null);
  const history = useHistory();

  const id = props.match.params.id;

  useEffect(() => {
    (async function fetchPlayer() {
      const request = await fetch(
        `${process.env.REACT_APP_API_URL}/player/${id}`
      );
      const fetchedPlayer = await request.json();
      setPlayer(fetchedPlayer);
    })();
  }, []);

  return (
    <>
      <PageHeader />
      {player && (
        <div className="player">
          <div className="player__image-wrapper">
            <img
              src={`/img/players/ranking-player-${player.id}.jpg`}
              alt={`${player.firstName} ${player.lastName}`}
              className="player__image"
            />
          </div>
          <div className="player__info">
            <header className="player__header">
              <button className="player__back-arrow" onClick={() => history.goBack()}>
              <FontAwesomeIcon
                icon={faArrowLeft}
              />
              </button>
              <img
                src={`/img/flag/${player.nationality.abbreviation}.svg`}
                alt="Poland"
                className="player__flag"
              />
            </header>
            <span className="player__place">12. miejsce w rankingu</span>
            <h2 className="player__name">{`${player.firstName} ${player.lastName}`}</h2>
            <h3 className="player__nickname">{player.nickname}</h3>
            <ul className="player__details">
              <li>Wiek: {new Date().getFullYear() - player.birthYear} lat</li>
              <li>Miejscowość: Tęgoborze</li>
            </ul>
            <ul className="player__social-media">
              <li>
                <FontAwesomeIcon icon={faInstagram} />
              </li>
              <li>
                <FontAwesomeIcon icon={faFacebook} />
              </li>
              <li>
                <FontAwesomeIcon icon={faYoutube} />
              </li>
            </ul>
          </div>
          <section className="player__statistics">
            <h3 className="statistics__title">Statystyki</h3>
            <ul className="statistics__list">
              <li>
                <span className="statistics__number">56</span> Startów
              </li>
              <li>
                <span className="statistics__number">35</span> Podium
              </li>
              <li>
                <span className="statistics__number">15</span> Wygranych
              </li>
            </ul>
          </section>
          <section className="player__charts"></section>
        </div>
      )}
    </>
  );
}
