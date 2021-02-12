import React, { useEffect, useState } from "react";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import {
  faInstagram,
  faFacebook,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

import "./player.scss";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { PlayerHistoryTable } from "../../components/PlayerHistoryTable/PlayerHistoryTable";
import { PageLoader } from "../../utils/PageLoader/PageLoader";

export function Player(props) {
  const [player, setPlayer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const id = props.match.params.id;

  useEffect(() => {
    (async function fetchPlayer() {
      const request = await fetch(
        `${process.env.REACT_APP_API_URL}/player/${id}`
      );
      const fetchedPlayer = await request.json();
      setPlayer(fetchedPlayer);
      setIsLoading(false);
    })();
  }, [id]);

  function renderStatistics() {
    const statistics = [];

    for (const category in player.statistics) {
      statistics.push(
        <li>
          <h3 className="statistics__category-title">{category}</h3>
          <ul className="statistics__category-list">
            <li>
              <span className="statistics__number">
                {player.statistics[category].starts}
              </span>
        Startów
              </li>
            <li>
              <span className="statistics__number">
                {player.statistics[category].podiums}
              </span>
        Podium
            </li>
            <li>
              <span className="statistics__number">
                {player.statistics[category].victories}
              </span>
        Wygranych
            </li>
          </ul>
        </li>
      )
    }
    return statistics;
  }

  return (
    <>
      <PageHeader />
      {isLoading ? (
        <PageLoader />
      ) : (
          player && (
            <div className="player">
              <div className="player__image-wrapper">
                <img
                  src={`/img/players/ranking-player-${player.id}.jpg`}
                  alt={`${player.firstName} ${player.lastName}`}
                  className="player__image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/img/players/ranking-player-0.png";
                  }}
                />
              </div>
              <div className="player__info">
                <header className="player__header">
                  <Link className="player__back-arrow" to="/players">
                    <FontAwesomeIcon icon={faAngleLeft} />
                  </Link>
                  <img
                    src={`/img/flag/${player.nationality.abbreviation}.svg`}
                    alt="Poland"
                    className="player__flag"
                  />
                </header>
                <span className="player__place">{`${player.rankingPlace["Battle"]}. miejsce w rankingu battle`}</span>
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
              <div className="player__sections">
                <nav className="player-nav">
                  <NavLink
                    className="player-nav__link"
                    activeClassName="player-nav__link--active"
                    to={`/player/${player.id}/statistics`}
                  >
                    Statystyki
                </NavLink>
                  <NavLink
                    className="player-nav__link"
                    activeClassName="player-nav__link--active"
                    to={`/player/${player.id}/history`}
                  >
                    Historia startów
                </NavLink>
                  <NavLink
                    className="player-nav__link"
                    activeClassName="player-nav__link--active"
                    exact
                    to={`/player/${player.id}`}
                  >
                    O zawodniku
                </NavLink>
                </nav>
                <Switch>
                  <Route path="/player/:id/statistics">
                    <section className="player__statistics">
                      <ul className="statistics__list">
                        {
                          renderStatistics()
                        }
                      </ul>
                    </section>
                    <section className="player__charts"></section>
                  </Route>
                  <Route path="/player/:id/history">
                    <PlayerHistoryTable entries={player.history} />
                  </Route>
                  <Route exact path="/player/:id">
                    <div className="player__bio">{player.bio}</div>
                  </Route>
                </Switch>
              </div>
            </div>
          )
        )}
    </>
  );
}
