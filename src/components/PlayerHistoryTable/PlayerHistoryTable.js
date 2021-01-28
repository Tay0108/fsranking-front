import React from "react";
import "./player-history-table.scss";
import { PlayerHistoryTableEntry } from "../PlayerHistoryTableEntry/PlayerHistoryTableEntry";

export function PlayerHistoryTable({ entries }) {
  return (
    <table className="player-history-table">
      <thead>
        <tr>
          <th>Miejsce</th>
          <th>Turniej</th>
          <th>Data</th>
          <th>Punkty</th>
        </tr>
      </thead>
      <tbody>
        {entries.sort().map((entry) => {
          const id = entry.tournamentId;
          const date = entry["tournament.date"];
          const name = entry["tournament.name"];
          const { place, points } = entry;

          return (
            <PlayerHistoryTableEntry
              key={id}
              date={date}
              name={name}
              place={place}
              points={points}
              tournamentId={id}
            />
          );
        })}
      </tbody>
    </table>
  );
}
