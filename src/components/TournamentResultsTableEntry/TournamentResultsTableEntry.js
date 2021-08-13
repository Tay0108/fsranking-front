import React from "react";
import "./tournament-results-table-entry.scss";
import { Link } from "react-router-dom";
import { mapPlaceToDisplayValue } from "../../utils/placeDisplay";

export function TournamentResultsTableEntry({ playerId, name, place, points }) {

  const placeToDisplay = mapPlaceToDisplayValue(place);

  return (
    <tr>
      <td><Link className="tournament-results-table__link" to={`/player/${playerId}`}>{placeToDisplay}</Link></td>
      <td><Link className="tournament-results-table__link" to={`/player/${playerId}`}>{name}</Link></td>
      <td><Link className="tournament-results-table__link" to={`/player/${playerId}`}>{points}</Link></td>
    </tr>
  );
}
