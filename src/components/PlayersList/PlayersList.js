import React, { Component } from 'react';
import './playerslist.scss';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';

class PlayersList extends Component {

  constructor() {
    super();
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    fetch('https://fsranking.herokuapp.com/players')
      .then(response => response.json())
      .then(json => this.setState({ players: json }));
  }

  render() {

    return (
      this.state.players.length === 0 ?
        (<Loader
          color="#010021"
          height="200"
          width="200"
        />)
        :

        (<section className="players-list">
          <table className="players-list__table">
            <thead className="players-list__header">
              <tr>
                <th>Imię i nazwisko</th>
                <th>Nick</th>
                <th>Wiek</th>
                <th>Narodowosc</th>
              </tr>
            </thead>
            <tbody className="players-list__body">
              {
                this.state.players.map((player) =>
                  (
                    <tr key={player.id} className="players-list__row">
                      <td><Link to={'/player/' + player.id} className="players-list__link">{player.firstName + ' ' + player.lastName}</Link></td>
                      <td><Link to={'/player/' + player.id} className="players-list__link">{player.nick}</Link></td>
                      <td><Link to={'/player/' + player.id} className="players-list__link">{player.age}</Link></td>
                      <td><Link to={'/player/' + player.id} className="players-list__link"><img className="players-list__flag" src={'/img/flags/' + player.nationality + '.svg'} alt="Poland" /></Link></td>
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

export default PlayersList;
