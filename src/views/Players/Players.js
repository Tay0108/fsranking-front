import React, { useEffect, useState } from "react";
import "./players.scss";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { SortingButton } from "../../components/SortingButton/SortingButton";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { PlayerCard } from "../../components/PlayerCard/PlayerCard";

export function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    (async function fetchPlayers() {
      const request = await fetch(`${process.env.REACT_APP_API_URL}/player`);
      const fetchedPlayers = await request.json();
      setPlayers(fetchedPlayers);
    })();
  }, []);

  return (
    <>
      <PageHeader />
      <SortingButton />
      <main className="main-content">
        <SearchBar />
        <ul className="players">
          {players.map((player) => (
            <PlayerCard
              name={`${player.firstName} ${player.lastName}`}
              nickname={player.nickname}
              age={player.age}
              image={`img/players/ranking-player-${0}.jpg`}
            />
          ))}
        </ul>
      </main>
    </>
  );
}
