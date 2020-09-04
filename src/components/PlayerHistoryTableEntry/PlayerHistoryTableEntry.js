import React from "react";
import "./player-history-table-entry.scss";

export function PlayerHistoryTableEntry({ date, name, location, weight }) {
  return (
    <tr>
      <td>{date}</td>
      <td>{name}</td>
      <td>{location}</td>
      <td>{weight}</td>
    </tr>
  );
}
