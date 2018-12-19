import React, { Component } from 'react';
import './competitionslist.scss';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import stable from 'stable';

class CompetitionsList extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch('https://fsranking.herokuapp.com/competitions')
      .then(response => response.json())
      .then(json => this.setState({ competitions: json }));
  }

  sortCompetitionsByName(direction) {
    console.log('sorting by name ' + direction);
    const asc = (a, b) => String(a.name).localeCompare(b.name);
    const desc = (a, b) => (-1) * String(a.name).localeCompare(b.name);
    let competitionsCopy = this.state.competitions;

    if (direction === 'asc') {
      stable.inplace(competitionsCopy, asc);
    } else if (direction === 'desc') {
      stable.inplace(competitionsCopy, desc);
    }
    this.setState({ competitions: competitionsCopy });
  }

  sortCompetitionsByLocation(direction) {
    console.log('sorting by location ' + direction);
    const asc = (a, b) => String(a.location).localeCompare(b.location);
    const desc = (a, b) => (-1) * String(a.location).localeCompare(b.location);
    let competitionsCopy = this.state.competitions;

    if (direction === 'asc') {
      stable.inplace(competitionsCopy, asc);
    } else if (direction === 'desc') {
      stable.inplace(competitionsCopy, desc);
    }
    this.setState({ competitions: competitionsCopy });
  }

  sortCompetitionsByDate(direction) {
    console.log('sorting by date ' + direction);

    const asc = function (a, b) {
      if (new Date(a.date).getTime() > new Date(b.date).getTime()) {
        return 1;
      } else if (new Date(a.date).getTime() < new Date(b.date).getTime()) {
        return -1;
      }
      else {
        return 0;
      }
    }
    const desc = function (a, b) {
      if (new Date(a.date).getTime() > new Date(b.date).getTime()) {
        return -1;
      } else if (new Date(a.date).getTime() < new Date(b.date).getTime()) {
        return 1;
      }
      else {
        return 0;
      }
    }
    let competitionsCopy = this.state.competitions;

    if (direction === 'asc') {
      stable.inplace(competitionsCopy, asc);
    } else if (direction === 'desc') {
      stable.inplace(competitionsCopy, desc);
    }
    this.setState({ competitions: competitionsCopy });
  }

  sortCompetitionsByImportance(direction) {
    console.log('sorting by importance ' + direction);
    const asc = (a, b) => (a.importance - b.importance);
    const desc = (a, b) => (b.importance - a.importance);
    let competitionsCopy = this.state.competitions;

    if (direction === 'asc') {
      stable.inplace(competitionsCopy, asc);
    } else if (direction === 'desc') {
      stable.inplace(competitionsCopy, desc);
    }
    this.setState({ competitions: competitionsCopy });
  }

  render() {
    if (this.state.competitions === undefined) {
      return (<Loader
        color="#010021"
        height="200"
        width="200"
      />);
    }
    else {
      return (
        <section className="competitions-list">
          <table className="competitions-list__table">
            <thead className="competitions-list__header">
              <tr>
                <th><div className="th-wrapper"><span className="competitions-list__column-name">Nazwa</span>
                  <div className="competitions-list__sort-arrows">
                    <FontAwesomeIcon className="sort-arrow" icon={faSortUp} onClick={() => this.sortCompetitionsByName('asc')} />
                    <FontAwesomeIcon className="sort-arrow" icon={faSortDown} onClick={() => this.sortCompetitionsByName('desc')} />
                  </div>
                </div>
                </th>
                <th><div className="th-wrapper"><span className="competitions-list__column-name">Lokalizacja</span>
                  <div className="competitions-list__sort-arrows">
                    <FontAwesomeIcon className="sort-arrow" icon={faSortUp} onClick={() => this.sortCompetitionsByLocation('asc')} />
                    <FontAwesomeIcon className="sort-arrow" icon={faSortDown} onClick={() => this.sortCompetitionsByLocation('desc')} />
                  </div>
                </div>
                </th>
                <th><div className="th-wrapper"><span className="competitions-list__column-name">Data</span>
                  <div className="competitions-list__sort-arrows">
                    <FontAwesomeIcon className="sort-arrow" icon={faSortUp} onClick={() => this.sortCompetitionsByDate('asc')} />
                    <FontAwesomeIcon className="sort-arrow" icon={faSortDown} onClick={() => this.sortCompetitionsByDate('desc')} />
                  </div>
                </div>
                </th>
                <th><div className="th-wrapper"><span className="competitions-list__column-name">Waga</span>
                  <div className="competitions-list__sort-arrows">
                    <FontAwesomeIcon className="sort-arrow" icon={faSortUp} onClick={() => this.sortCompetitionsByImportance('asc')} />
                    <FontAwesomeIcon className="sort-arrow" icon={faSortDown} onClick={() => this.sortCompetitionsByImportance('desc')} />
                  </div>
                </div>
                </th>
              </tr>
            </thead>
            <tbody className="competitions-list__body">
              {
                this.state.competitions.map((competition) =>
                  (
                    <tr key={competition.id} className="competitions-list__row">
                      <td><Link to={'/competition/' + competition.id} className="competitions-list__link">{competition.name}</Link></td>
                      <td><Link to={'/competition/' + competition.id} className="competitions-list__link">{competition.location}</Link></td>
                      <td><Link to={'/competition/' + competition.id} className="competitions-list__link">{competition.date}</Link></td>
                      <td><Link to={'/competition/' + competition.id} className="competitions-list__link">{competition.importance}</Link></td>
                    </tr>
                  )
                )
              }
            </tbody>
          </table>
        </section>
      );
    }
  }
}

export default CompetitionsList;
