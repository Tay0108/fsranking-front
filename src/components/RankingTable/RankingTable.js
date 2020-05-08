import React from "react";
import "./ranking-table.scss";
import { RankingTableEntry } from "../RankingTableEntry/RankingTableEntry";
import { players } from "../../mocks/players";

export function RankingTable() {
  return (
    <table className="ranking-table">
      <thead>
        <tr>
          <th>Miejsce</th>
          <th>Imię i nazwisko</th>
          <th>Wiek</th>
          <th>Kraj</th>
          <th>Punkty</th>
          <th>Trend</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => {
          if (player.place < 4) {
            return null;
          }
          return (
            <RankingTableEntry
              key={player.place}
              place={player.place}
              name={player.name}
              age={player.age}
              nationality={player.nationality}
              points={player.points}
              trend={player.trend}
            />
          );
        })}
      </tbody>
    </table>
  );
}
