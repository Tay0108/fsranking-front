import React from "react";
import "./player-history-table-entry.scss";
import { Link } from "react-router-dom";
import { mapPlaceToDisplayValue } from "../../utils/placeDisplay";

export function PlayerHistoryTableEntry({ date, name, place, points, tournamentId }) {

  const placeToDisplay = mapPlaceToDisplayValue(place);

  return (
    <tr>
      <td><Link className="player-history-table__link" to={`/tournament/${tournamentId}`}>{placeToDisplay}</Link></td>
      <td><Link className="player-history-table__link" to={`/tournament/${tournamentId}`}>{name}</Link></td>
      <td><Link className="player-history-table__link" to={`/tournament/${tournamentId}`}>{date}</Link></td>
      <td><Link className="player-history-table__link" to={`/tournament/${tournamentId}`}>{points}</Link></td>
    </tr>
  );
}
