import React from "react";
import "./tournament-table.scss";
import { TournamentTableEntry } from "../TournamentTableEntry/TournamentTableEntry";

export function TournamentTable({ entries }) {
  return (
    <table className="tournament-table">
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
          <TournamentTableEntry
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
