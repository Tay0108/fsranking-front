import React, { useEffect, useState } from "react";
import "./players.scss";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { SortingButton } from "../../components/SortingButton/SortingButton";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { PlayerCard } from "../../components/PlayerCard/PlayerCard";
import { PageLoader } from "../../utils/PageLoader/PageLoader";
import { PageFooter } from "../../components/PageFooter/PageFooter";

export function Players() {
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function fetchPlayers() {
      const request = await fetch(`${process.env.REACT_APP_API_URL}/player`);
      const fetchedPlayers = await request.json();
      setPlayers(fetchedPlayers);
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
          <SearchBar />
          <ul className="players">
            {players.map((player) => (
              <PlayerCard
                key={player.id}
                id={player.id}
                name={`${player.firstName} ${player.lastName}`}
                nickname={player.nickname}
                age={new Date().getFullYear() - player.birthYear}
                image={`img/players/ranking-player-${0}.jpg`}
              />
            ))}
          </ul>
        </main>
      )}
      <PageFooter /> {/* TODO: turn off on mobile */}
    </>
  );
}
