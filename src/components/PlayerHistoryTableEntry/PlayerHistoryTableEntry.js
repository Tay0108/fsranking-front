import React from "react";
import "./player-history-table-entry.scss";
import { Link } from "react-router-dom";

export function PlayerHistoryTableEntry({ date, name, place, points, tournamentId }) {
  return (
    <tr>
      <td><Link className="player-history-table__link" to={`/tournament/${tournamentId}`}>{place}.</Link></td>
      <td><Link className="player-history-table__link" to={`/tournament/${tournamentId}`}>{name}</Link></td>
      <td><Link className="player-history-table__link" to={`/tournament/${tournamentId}`}>{date}</Link></td>
      <td><Link className="player-history-table__link" to={`/tournament/${tournamentId}`}>{points}</Link></td>
    </tr>
  );
}
