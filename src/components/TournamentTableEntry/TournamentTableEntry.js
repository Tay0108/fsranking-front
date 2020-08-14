import React from "react";
import "./tournament-table-entry.scss";

export function TournamentTableEntry({ date, name, location, weight }) {
  return (
    <tr>
      <td>{date}</td>
      <td>{name}</td>
      <td>{location}</td>
      <td>{weight}</td>
    </tr>
  );
}
