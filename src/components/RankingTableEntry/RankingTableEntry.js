import React from "react";
import "./ranking-table-entry.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faGripLines
} from "@fortawesome/free-solid-svg-icons";

export function RankingTableEntry({
  place,
  name,
  age,
  nationality,
  points,
  trend
}) {
  return (
    <tr>
      <td>{place}.</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>
        <img
          className="ranking-table__nationality"
          alt={nationality}
          src={`/img/flag/${nationality}.svg`}
        />
      </td>
      <td>{points}</td>
      {trend === -1 && (
        <td>
          <FontAwesomeIcon
            className="ranking-table__trend--down"
            icon={faChevronDown}
          />
        </td>
      )}
      {trend === 0 && (
        <td>
          <FontAwesomeIcon
            className="ranking-table__trend--stale"
            icon={faGripLines}
          />
        </td>
      )}
      {trend === 1 && (
        <td>
          <FontAwesomeIcon
            className="ranking-table__trend--up"
            icon={faChevronUp}
          />
        </td>
      )}
    </tr>
  );
}
