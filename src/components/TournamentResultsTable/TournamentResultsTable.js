import React from "react";
import "./tournament-results-table.scss";
import { TournamentResultsTableEntry } from "../TournamentResultsTableEntry/TournamentResultsTableEntry";

export function TournamentResultsTable({ entries }) {
  return (
    <table className="tournament-results-table">
      <thead>
        <tr>
          <th>Miejsce</th>
          <th>Zawodnik</th>
          <th>Punkty</th>
        </tr>
      </thead>
      <tbody>
        {entries.sort().map((entry) => {
          const id = entry.playerId;
          const name = `${entry.player.firstName} ${entry.player.lastName}`;
          const { place, points } = entry;

          return (
            <TournamentResultsTableEntry
              key={id}
              name={name}
              place={place}
              points={points}
            />
          );
        })}
      </tbody>
    </table>
  );
}
