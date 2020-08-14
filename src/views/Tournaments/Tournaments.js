import React, { useEffect, useState } from "react";
import "./tournaments.scss";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { SortingButton } from "../../components/SortingButton/SortingButton";
import { TournamentTable } from "../../components/TournamentTable/TournamentTable";
import { Link, NavLink, Route, Switch } from "react-router-dom";

export function Tournaments() {
  const [pastTournaments, setPastTournaments] = useState([]);
  const [upcomingTournaments, setUpcomingTournaments] = useState([]);

  useEffect(() => {
    (async function fetchTournaments() {
      const request = await fetch(
        `${process.env.REACT_APP_API_URL}/tournament`
      );
      const fetchedTournaments = await request.json();
      setPastTournaments(fetchedTournaments.pastTournaments);
      setUpcomingTournaments(fetchedTournaments.upcomingTournaments);
    })();
  }, []);

  return (
    <>
      <PageHeader />
      <SortingButton />
      <main className="main-content">
        <header className="tournaments-header">
          <nav className="tournaments-nav">
            <NavLink
              exact={true}
              activeClassName="tournaments-nav__link--active"
              to="/tournaments"
              className="tournaments-nav__link"
            >
              Nadchodzące
            </NavLink>
            <NavLink
              activeClassName="tournaments-nav__link--active"
              to="/tournaments/history"
              className="tournaments-nav__link"
            >
              Historia
            </NavLink>
          </nav>
          <p className="tournaments-header__info">
            Aktualnie zaplanowanych jest{" "}
            <span className="tournaments-count">20</span> turniejów w{" "}
            <span className="locations-count">15</span> miastach.
          </p>
        </header>
        <Switch>
          <Route path="/tournaments/history">
            <TournamentTable entries={pastTournaments} />
          </Route>
          <Route path="/tournaments/">
            <TournamentTable entries={upcomingTournaments} />
          </Route>
        </Switch>
      </main>
    </>
  );
}
