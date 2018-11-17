import React, { Component } from 'react';
import './ranking.scss';
import RankingTopPlayer from './RankingTopPlayer';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';

export class Ranking extends Component {

  constructor(props) {
    super(props);
    this.state = {
      players: null,
    };
  }

  componentDidMount() {
    fetch('https://fsranking.herokuapp.com/players')
      .then(response => response.json())
      .then(json => this.setState({ players: json })); 
  }

  render() {

    let top3 = [];
    let players = [];

    if(this.state.players != null) {
      this.state.players.sort((a, b) => (-1)*(a.point - b.point))
      top3 = this.state.players.slice(0,3);
      players = this.state.players.slice(3, this.state.players.length);
    }

    let place = 4;

    return (
      players.length === 0 ?
        (<Loader
          color="#010021"
          height="200"
          width="200"
        />)
        :

        (<section className="ranking">

          <ul className="ranking__top-list">
            <li><RankingTopPlayer player={top3[0]} color='#ffd700' /></li>
            <li><RankingTopPlayer player={top3[1]} color='#c0c0c0' /></li>
            <li><RankingTopPlayer player={top3[2]} color='#905923' /></li>
          </ul>
          <table className="ranking__table">
            <thead className="ranking__header">
              <tr>
                <th>Miejsce</th>
                <th>Imię i nazwisko</th>
                <th>Wiek</th>
                <th>Narodowosc</th>
                <th>Punkty</th>
                <th>Trend</th>
              </tr>
            </thead>
            <tbody className="ranking__body">
              {
                players.map((player) =>
                  (
                    <tr key={player.id} className="ranking__row">
                    <td><Link to={'/player/' + player.id} className="ranking__link">{place++}.</Link></td>
                    <td><Link to={'/player/' + player.id} className="ranking__link">{player.firstName + ' ' + player.lastName}</Link></td>
                    <td><Link to={'/player/' + player.id} className="ranking__link">{player.age}</Link></td>
                    <td><Link to={'/player/' + player.id} className="ranking__link"><img className="ranking__flag" src={'/img/flags/' + player.nationality + '.svg'} alt="Poland" /></Link></td>
                    <td><Link to={'/player/' + player.id} className="ranking__link">{player.point}</Link></td>
                    <td><Link to={'/player/' + player.id} className="ranking__link">up</Link></td>
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

export default Ranking;
