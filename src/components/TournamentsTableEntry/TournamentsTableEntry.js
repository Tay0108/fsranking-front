import React from "react";
import "./tournaments-table-entry.scss";

export function TournamentsTableEntry({ date, name, location, weight }) {
  return (
    <tr>
      <td>{date}</td>
      <td>{name}</td>
      <td>{location}</td>
      <td>{weight}</td>
    </tr>
  );
}
