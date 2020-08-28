import React from "react";
import "./ranking-table-entry.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faGripLines
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function RankingTableEntry({
  id,
  place,
  name,
  age,
  nationality,
  points,
  trend
}) {
  return (
    <tr>
      <td>
        <Link className="ranking-table__link" to={`/player/${id}`}>
          {place}.
        </Link>
      </td>
      <td>
        <Link className="ranking-table__link" to={`/player/${id}`}>
          {name}
        </Link>
      </td>
      <td>
        <Link className="ranking-table__link" to={`/player/${id}`}>
          {age}
        </Link>
      </td>
      <td>
        <Link className="ranking-table__link" to={`/player/${id}`}>
          <img
            className="ranking-table__nationality"
            alt={nationality}
            src={`/img/flag/${nationality}.svg`}
          />
        </Link>
      </td>
      <td>
        <Link className="ranking-table__link" to={`/player/${id}`}>
          {points}
        </Link>
      </td>
      {trend === -1 && (
        <td>
          <Link className="ranking-table__link" to={`/player/${id}`}>
            <FontAwesomeIcon
              className="ranking-table__trend--down"
              icon={faChevronDown}
            />
          </Link>
        </td>
      )}
      {trend === 0 && (
        <td>
          <Link className="ranking-table__link" to={`/player/${id}`}>
            <FontAwesomeIcon
              className="ranking-table__trend--stale"
              icon={faGripLines}
            />
          </Link>
        </td>
      )}
      {trend === 1 && (
        <td>
          <Link className="ranking-table__link" to={`/player/${id}`}>
            <FontAwesomeIcon
              className="ranking-table__trend--up"
              icon={faChevronUp}
            />
          </Link>
        </td>
      )}
    </tr>
  );
}
