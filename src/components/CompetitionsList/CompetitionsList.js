import React, { Component } from 'react';
import './competitionslist.scss';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';

class CompetitionsList extends Component {

  constructor() {
    super();
    this.state = {
        competitions: [],
    };
  }

  componentDidMount() {
    fetch('https://fsranking.herokuapp.com/competitions')
    .then(response => response.json())
    .then(json => this.setState({ competitions: json }));
  }
  render() {

    if(this.state.competitions.length !== 0) {
        this.state.competitions.sort((a, b) => (-1) * (a.importance - b.importance));
    }

  return(
  this.state.competitions.length === 0 ?
        (<Loader
          color="#010021"
          height="200"
          width="200"
        />)
        :

        (<section className="competitions-list">
          <table className="competitions-list__table">
            <thead className="competitions-list__header">
              <tr>
                <th>Nazwa</th>
                <th>Lokalizacja</th>
                <th>Data</th>
                <th>Waga</th>
              </tr>
            </thead>
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
          </table>
        </section>
        )
    );
  }
}

export default CompetitionsList;
