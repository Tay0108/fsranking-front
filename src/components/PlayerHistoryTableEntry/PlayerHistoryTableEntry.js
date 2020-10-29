import React from "react";
import "./player-history-table-entry.scss";

export function PlayerHistoryTableEntry({ date, name, place, points }) {
  return (
    <tr>
      <td>{place}.</td>
      <td>{name}</td>
      <td>{date}</td>
      <td>{points}</td>
    </tr>
  );
}
