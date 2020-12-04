import React from "react";
import "./tournament-results-table-entry.scss";

export function TournamentResultsTableEntry({ name, place, points }) {
  return (
    <tr>
      <td>{place}.</td>
      <td>{name}</td>
      <td>{points}</td>
    </tr>
  );
}
