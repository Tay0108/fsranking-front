import React, { Component } from 'react';
import './ranking.scss';
import RankingTopPlayer from './RankingTopPlayer';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faArrowUp, faArrowDown, faBullseye } from '@fortawesome/free-solid-svg-icons';
import 'rc-slider/assets/index.css'
import { Range } from 'rc-slider';

let place = 4;

class Ranking extends Component {

  constructor(props) {
    super(props);
    this.state = {
      players: null,
    };
  }

  componentDidMount() {
    fetch('https://fsranking.herokuapp.com/rankings/battle')
      .then(response => response.json())
      .then(json => this.setState({ players: json }));
  }

  showFilters() {
    document.querySelector('.filters').classList.add('filters--open');
  }

  closeFilters() {
    document.querySelector('.filters').classList.remove('filters--open');
  }

  filterByDate() {
    console.log('filter by date');
  }

  showPlayer(player) {
    let trend = faBullseye;
    let style = {
      color: 'grey',
    };

    if (player.trend === 'UP') {
      trend = faArrowUp;
      style = {
        color: 'green',
      };
    } else if (player.trend === 'DOWN') {
      trend = faArrowDown;
      style = {
        color: 'red',
      };
    }
    return (
      <tr key={player.idPlayer} className="ranking__row">
        <td><Link to={'/player/' + player.idPlayer} className="ranking__link">{place++}.</Link></td>
        <td><Link to={'/player/' + player.idPlayer} className="ranking__link">{player.firstName + ' ' + player.lastName}</Link></td>
        <td><Link to={'/player/' + player.idPlayer} className="ranking__link">{player.age}</Link></td>
        <td><Link to={'/player/' + player.idPlayer} className="ranking__link"><img className="ranking__flag" src={'/img/flags/' + player.nationality + '.svg'} alt="Poland" /></Link></td>
        <td><Link to={'/player/' + player.idPlayer} className="ranking__link">{player.points}</Link></td>
        <td><Link to={'/player/' + player.idPlayer} className="ranking__link"><FontAwesomeIcon style={style} icon={trend} /></Link></td>
      </tr>);
  }

  render() {

    let top3 = [];
    let players = [];

    if (this.state.players != null) {
      this.state.players.sort((a, b) => (-1) * (a.points - b.points))
      top3 = this.state.players.slice(0, 3);
      players = this.state.players.slice(3, this.state.players.length);
    }

    if (players.length === 0) {
      return (
        <Loader
          color="#010021"
          height="200"
          width="200"
        />
      );
    }

    return (
      <section className="ranking">

        <div className="filters">
          <button type="button" className="filters__sharp" onClick={this.closeFilters}><FontAwesomeIcon icon={faTimes} /></button>
          <h3 className="filter-title">Filtr daty:</h3>
          <h3 className="filter-title">Filtr wieku:</h3>
          <Range className="filter-slider" allowCross={false} min={0} max={100} defaultValue={[0, 100]} onChange={() => this.filterByDate()} />
          <h3 className="filter-title">Filtr narodowosci:</h3>
          <h3 className="filter-title">Filtr kategorii:</h3>
        </div>
        <div className="show-filters-wrapper">
          <button className="show-filters-button" onClick={() => this.showFilters()}>Filtruj ranking</button>
        </div>

        <ul className="ranking__top-list">
          <li><RankingTopPlayer player={top3[0]} color='#ffd700' /></li>
          <li><RankingTopPlayer player={top3[1]} color='#c0c0c0' /></li>
          <li><RankingTopPlayer player={top3[2]} color='#905923' /></li>
        </ul >
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
            {players.map((player) => this.showPlayer(player))}
          </tbody>
        </table>
      </section >

    );
  }
}

export default Ranking;
