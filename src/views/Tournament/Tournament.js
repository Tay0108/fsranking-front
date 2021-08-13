import React, { useEffect, useState } from "react";
import { PageHeader } from "../../components/PageHeader/PageHeader";

import "./tournament.scss";
import { PageLoader } from "../../components/PageLoader/PageLoader";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { TournamentResultsTable } from "../../components/TournamentResultsTable/TournamentResultsTable";

export function Tournament(props) {
  const [tournament, setTournament] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const id = props.match.params.id;

  useEffect(() => {
    (async function fetchTournament() {
      const request = await fetch(
        `${process.env.REACT_APP_API_URL}/tournament/${id}`
      );
      const fetchedTournament = await request.json();
      setTournament(fetchedTournament);
      setIsLoading(false);
    })();
  }, [id]);

  return (
    <>
      <PageHeader />
      {isLoading ? (
        <PageLoader />
      ) : (
        tournament && (
          <div className="tournament">
            <div className="tournament__image-wrapper">
              <img
                src={`/img/tournaments/tournament-${tournament.id}.jpg`}
                alt={`${tournament.name}`}
                className="tournament__image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/tournaments/tournament-0.png";
                }}
              />
            </div>
            <div className="tournament__info">
              <header className="tournament__header">
                <Link className="tournament__back-arrow" to="/tournaments">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
                <img
                  src={`/img/flag/pl.svg`}
                  alt="Poland"
                  className="tournament__flag"
                />
              </header>
              <h2 className="tournament__name">{tournament.name}</h2>
              <h3 className="tournament__location">Olkusz</h3>
              <span className="tournament__weight">Waga turnieju: {tournament.weight}</span>
              <ul className="tournament__social-media">
                <li>
                  <FontAwesomeIcon icon={faFacebook} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faYoutube} />
                </li>
              </ul>
            </div>
            <div className="tournament__sections">
              <nav className="tournament-nav">
                <NavLink
                  className="tournament-nav__link"
                  activeClassName="tournament-nav__link--active"
                  to={`/tournament/${tournament.id}/starting-list`}
                >
                  Lista startowa
                </NavLink>
                <NavLink
                  className="tournament-nav__link"
                  activeClassName="tournament-nav__link--active"
                  exact
                  to={`/tournament/${tournament.id}`}
                >
                  Wyniki zawodów
                </NavLink>
              </nav>
              <Switch>
                <Route path="/tournament/:id/starting-list">
                  <div className="tournament__description">
                    {tournament.description}
                  </div>
                </Route>
                <Route path="/tournament/:id">
                  <nav className="tournament__category-nav">
                    {tournament.categories.map(category => {
                      return <NavLink
                        className="category-nav__link"
                        to={`/tournament/${tournament.id}/results/${category.gender}/${category.name}`}>{category.name}
                        <span className="link__subtitle">{category.gender}</span></NavLink>
                    })
                    }
                  </nav>
                  <Switch>
                    <Route path="/tournament/:id/results/:gender/:category">

                      <TournamentResultsTable
                        entries={tournament.categories.find(category => category.name === 'Battle' && category.gender === 'Male').results}
                      />
                    </Route>
                  </Switch>
                </Route>

              </Switch>
            </div>
          </div>
        )
      )}
    </>
  );
}
