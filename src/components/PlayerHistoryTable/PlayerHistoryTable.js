import React from "react";
import "./player-history-table.scss";
import { PlayerHistoryTableEntry } from "../PlayerHistoryTableEntry/PlayerHistoryTableEntry";

export function PlayerHistoryTable({ entries }) {
  return (
    <table className="player-history-table">
      <thead>
      <tr>
        <th>Data</th>
        <th>Nazwa</th>
        <th>Lokalizacja</th>
        <th>Waga</th>
      </tr>
      </thead>
      <tbody>
      {entries.map((tournament) => (
        <PlayerHistoryTableEntry
          key={tournament.id}
          date={tournament.date}
          name={tournament.name}
          location={tournament.locationId} // TODO: refactor to location name
          weight={tournament.weight}
        />
      ))}
      </tbody>
    </table>
  );
}
