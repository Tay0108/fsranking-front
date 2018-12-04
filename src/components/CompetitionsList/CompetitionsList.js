import React, { Component } from 'react';
import './competitionslist.scss';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  compareCompetitionsBy(key, direction) {
    if (direction === 'DESC') {
      return function (a, b) {
        if (a[key] < b[key]) return 1;
        if (b[key] < a[key]) return -1;
        return 0;
      }
    }
    if (direction === 'ASC') {
      return function (a, b) {
        if (a[key] < b[key]) return -1;
        if (b[key] < a[key]) return 1;
        return 0;
      }
    }
    return function(a,b) {
      return 0;
    }
  }

  sortCompetitionsBy(key, direction) {
    console.log('sorting by ' + key + ' ' + direction);

    let competitionsCopy = this.state.competitions;
    competitionsCopy.sort(this.compareCompetitionsBy(key, direction));
    this.setState({competitions: competitionsCopy});
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
                <th><span className="competitions-list__column-name">Nazwa</span>
                  <div className="competitions-list__sort-arrows">
                    <FontAwesomeIcon className="sort-arrow" icon={faSortUp} onClick={() => this.sortCompetitionsBy('name', 'ASC')} />
                    <FontAwesomeIcon className="sort-arrow" icon={faSortDown} onClick={() => this.sortCompetitionsBy('name', 'DESC')} />
                  </div>
                </th>
                <th><span className="competitions-list__column-name">Lokalizacja</span>
                  <div className="competitions-list__sort-arrows">
                    <FontAwesomeIcon className="sort-arrow" icon={faSortUp} onClick={() => this.sortCompetitionsBy('location', 'ASC')} />
                    <FontAwesomeIcon className="sort-arrow" icon={faSortDown} onClick={() => this.sortCompetitionsBy('location', 'DESC')} />
                  </div>
                </th>
                <th><span className="competitions-list__column-name">Data</span>
                  <div className="competitions-list__sort-arrows">
                    <FontAwesomeIcon className="sort-arrow" icon={faSortUp} onClick={() => this.sortCompetitionsBy('year', 'ASC')} />
                    <FontAwesomeIcon className="sort-arrow" icon={faSortDown} onClick={() => this.sortCompetitionsBy('year', 'DESC')} />
                  </div>
                </th>
                <th><span className="competitions-list__column-name">Waga</span>
                  <div className="competitions-list__sort-arrows">
                    <FontAwesomeIcon className="sort-arrow" icon={faSortUp} onClick={() => this.sortCompetitionsBy('importance', 'ASC')} />
                    <FontAwesomeIcon className="sort-arrow" icon={faSortDown} onClick={() => this.sortCompetitionsBy('importance', 'DESC')} />
                  </div>
                </th>
              </tr>
            </thead >
            <tbody className="competitions-list__body">
              {
                this.state.competitions.map((competition) =>
                  (
                    <tr key={competition.id} className="competitions-list__row">
                      <td><Link to={'/competition/' + competition.id} className="competitions-list__link">{competition.name}</Link></td>
                      <td><Link to={'/competition/' + competition.id} className="competitions-list__link">{competition.location.name}</Link></td>
                      <td><Link to={'/competition/' + competition.id} className="competitions-list__link">{competition.year}</Link></td>
                      <td><Link to={'/competition/' + competition.id} className="competitions-list__link">{competition.importance}</Link></td>
                    </tr>
                  )
                )
              }
            </tbody>
          </table >
        </section >
      );
    }
  }
}

export default CompetitionsList;
