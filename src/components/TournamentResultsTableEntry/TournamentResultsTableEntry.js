import React from "react";
import "./tournament-results-table-entry.scss";
import { mapPlaceToDisplayValue } from "../../utils/placeDisplay";

export function TournamentResultsTableEntry({ name, place, points }) {

  const placeToDisplay = mapPlaceToDisplayValue(place);

  return (
    <tr>
      <td>{placeToDisplay}</td>
      <td>{name}</td>
      <td>{points}</td>
    </tr>
  );
}
