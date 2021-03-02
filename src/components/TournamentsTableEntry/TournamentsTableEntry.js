import React from "react";
import "./tournaments-table-entry.scss";
import { Link } from "react-router-dom";

export function TournamentsTableEntry({ id, date, name, location, tier }) {
  return (
    <tr>
      <td><Link className="tournaments-table__link" to={`/tournament/${id}`}>{date}</Link></td>
      <td><Link className="tournaments-table__link" to={`/tournament/${id}`}>{name}</Link></td>
      <td><Link className="tournaments-table__link" to={`/tournament/${id}`}>{location}</Link></td>
      <td><Link className="tournaments-table__link" to={`/tournament/${id}`}>{tier}</Link></td>
    </tr>
  );
}
