import React from "react";
import "./tournaments-table.scss";
import { TournamentsTableEntry } from "../TournamentsTableEntry/TournamentsTableEntry";

export function TournamentsTable({ entries }) {
  return (
    <table className="tournaments-table">
      <thead>
        <tr>
          <th>Data</th>
          <th>Nazwa</th>
          <th>Lokalizacja</th>
          <th>Cykl zawodów</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((tournament) => (
          <TournamentsTableEntry
            key={tournament.id}
            id={tournament.id}
            date={tournament.date}
            name={tournament.name}
            location={tournament.location.name}
            tier={tournament["tournament_tier"].name}
          />
        ))}
      </tbody>
    </table>
  );
}
