import React, { useEffect, useState } from "react";
import "./tournaments.scss";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { SortingButton } from "../../components/SortingButton/SortingButton";
import { TournamentsTable } from "../../components/TournamentsTable/TournamentsTable";
import { NavLink, Route, Switch } from "react-router-dom";
import { PageLoader } from "../../components/PageLoader/PageLoader";
import { PageFooter } from "../../components/PageFooter/PageFooter";

export function Tournaments() {
  const [pastTournaments, setPastTournaments] = useState([]);
  const [pastTournamentsCount, setPastTournamentsCount] = useState(0);
  const [pastTournamentLocationsCount, setPastTournamentCitiesCount] = useState(0);
  const [upcomingTournaments, setUpcomingTournaments] = useState([]);
  const [upcomingTournamentsCount, setUpcomingTournamentsCount] = useState(0);
  const [upcomingTournamentLocationsCount, setUpcomingTournamentCitiesCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function fetchTournaments() {
      const request = await fetch(
        `${process.env.REACT_APP_API_URL}/tournament`
      );
      const fetchedTournaments = await request.json();
      setPastTournaments(fetchedTournaments.pastTournaments);
      setPastTournamentsCount(fetchedTournaments.pastTournamentsCount);
      setPastTournamentCitiesCount(fetchedTournaments.pastTournamentLocationsCount);
      setUpcomingTournaments(fetchedTournaments.upcomingTournaments);
      setUpcomingTournamentsCount(fetchedTournaments.upcomingTournamentsCount);
      setUpcomingTournamentCitiesCount(fetchedTournaments.upcomingTournamentLocationsCount);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <PageHeader />
      <SortingButton />
      {isLoading ? (
        <PageLoader />
      ) : (
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
              <Switch>
                <Route path="/tournaments/history">
                  <p className="tournaments-header__info">
                    Do tej pory odbyło się {" "}
                    <span className="tournaments-count">{pastTournamentsCount}</span> turniejów w{" "}
                    <span className="locations-count">{pastTournamentLocationsCount}</span> miastach.
            </p>
                </Route>
                <Route path="/tournaments/">
                  <p className="tournaments-header__info">
                    Aktualnie zaplanowanych jest{" "}
                    <span className="tournaments-count">{upcomingTournamentsCount}</span> turniejów w{" "}
                    <span className="locations-count">{upcomingTournamentLocationsCount}</span> miastach.
            </p>
                </Route>
              </Switch>
            </header>
            <Switch>
              <Route path="/tournaments/history">
                <TournamentsTable entries={pastTournaments} />
              </Route>
              <Route path="/tournaments/">
                <TournamentsTable entries={upcomingTournaments} />
              </Route>
            </Switch>
          </main>
        )}
      <PageFooter /> {/* TODO: turn off on mobile */}
    </>
  );
}
