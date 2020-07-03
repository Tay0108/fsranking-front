import React, { useEffect, useState } from "react";
import "./tournaments.scss";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { SortingButton } from "../../components/SortingButton/SortingButton";
import { SearchBar } from "../../components/SearchBar/SearchBar";

export function Tournaments() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    (async function fetchTournaments() {
      const request = await fetch(
        `${process.env.REACT_APP_API_URL}/tournament`
      );
      const fetchedTournaments = await request.json();
      setTournaments(fetchedTournaments);
    })();
  }, []);

  return (
    <>
      <PageHeader />
      <SortingButton />
      <main className="main-content">
        <SearchBar />
        <ul className="tournaments">
          {tournaments.map((tournament) => tournament.name)}
        </ul>
      </main>
    </>
  );
}
