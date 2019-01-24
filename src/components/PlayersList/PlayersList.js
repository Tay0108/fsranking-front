import React, { Component } from 'react';
import './playerslist.scss';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
import stable from 'stable';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextField from '@material-ui/core/TextField';

class PlayersList extends Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch('https://localhost:8080/players')
      .then(response => response.json())
      .then(players => players.map(function (player) {
        if (player.nick === null) {
          player.nick = '-';
        }
        return player;
      }))
      .then(json => this.setState({ players: json, playersOrigin: json }))
  }

  sortPlayersByName(direction) {
    console.log('sorting by last name ' + direction);
    const asc = (a, b) => String(a.lastName).localeCompare(b.lastName);
    const desc = (a, b) => (-1) * String(a.lastName).localeCompare(b.lastName);
    let playersCopy = this.state.players;

    if (direction === 'asc') {
      stable.inplace(playersCopy, asc);
    } else if (direction === 'desc') {
      stable.inplace(playersCopy, desc);
    }
    this.setState({ players: playersCopy });
  }

  sortPlayersByNick(direction) {
    console.log('sorting by nick ' + direction);
    const asc = (a, b) => String(a.nick).localeCompare(b.nick);
    const desc = (a, b) => (-1) * String(a.nick).localeCompare(b.nick);
    let playersCopy = this.state.players;

    if (direction === 'asc') {
      stable.inplace(playersCopy, asc);
    } else if (direction === 'desc') {
      stable.inplace(playersCopy, desc);
    }
    this.setState({ players: playersCopy });
  }

  sortPlayersByNationality(direction) {
    console.log('sorting by nationality ' + direction);
    const asc = (a, b) => String(a.nationality).localeCompare(b.nationality);
    const desc = (a, b) => (-1) * String(a.nationality).localeCompare(b.nationality);
    let playersCopy = this.state.players;

    if (direction === 'asc') {
      stable.inplace(playersCopy, asc);
    } else if (direction === 'desc') {
      stable.inplace(playersCopy, desc);
    }
    this.setState({ players: playersCopy });
  }

  sortPlayersByAge(direction) {
    console.log('sorting by age ' + direction);
    const asc = (a, b) => (a.age - b.age);
    const desc = (a, b) => (b.age - a.age);
    let playersCopy = this.state.players;

    if (direction === 'asc') {
      stable.inplace(playersCopy, asc);
    } else if (direction === 'desc') {
      stable.inplace(playersCopy, desc);
    }
    this.setState({ players: playersCopy });
  }

  filterPlayers(event) {
    let playersCopy = this.state.playersOrigin;

    function check(player, word) {

      if ((player.firstName + ' ' + player.nick + ' ' + player.lastName).toLowerCase().includes(word) || (player.firstName + ' ' + player.lastName).toLowerCase().includes(word)) {
        return true;
      }
      return false;
    }

    playersCopy = playersCopy.filter((player) => check(player, event.target.value));

    this.setState({ players: playersCopy });
  }

  render() {

    if (this.state.players === undefined) {
      return (<Loader
        color="#010021"
        height="200"
        width="200"
      />);
    }

    return (
      <section className="players-list">

        <form className="players-list__filter">
        <h4 className="filter-title">Wyszukaj zawodnika:</h4>
          <TextField id="dateFrom" placeholder="Imię, nazwisko lub nick" variant="outlined" type="text" defaultValue="" className="filter__player" onChange={(event) => this.filterPlayers(event)}
            InputProps={{
              className: 'filter__player-input',
            }} />
        </form>
        <table className="players-list__table">
          <thead className="players-list__header">
            <tr>
              <th><div className="th-wrapper"><span className="players-list__column-name">Imię i nazwisko</span>
                <div className="players-list__sort-arrows">
                  <FontAwesomeIcon className="sort-arrow" icon={faSortUp} onClick={() => this.sortPlayersByName('asc')} />
                  <FontAwesomeIcon className="sort-arrow" icon={faSortDown} onClick={() => this.sortPlayersByName('desc')} />
                </div>
              </div>
              </th>
              <th><div className="th-wrapper"><span className="players-list__column-name">Nick</span>
                <div className="players-list__sort-arrows">
                  <FontAwesomeIcon className="sort-arrow" icon={faSortUp} onClick={() => this.sortPlayersByNick('asc')} />
                  <FontAwesomeIcon className="sort-arrow" icon={faSortDown} onClick={() => this.sortPlayersByNick('desc')} />
                </div>
              </div>
              </th>
              <th><div className="th-wrapper"><span className="players-list__column-name">Wiek</span>
                <div className="players-list__sort-arrows">
                  <FontAwesomeIcon className="sort-arrow" icon={faSortUp} onClick={() => this.sortPlayersByAge('asc')} />
                  <FontAwesomeIcon className="sort-arrow" icon={faSortDown} onClick={() => this.sortPlayersByAge('desc')} />
                </div>
              </div>
              </th>
              <th><div className="th-wrapper"><span className="players-list__column-name">Narodowość</span>
                <div className="players-list__sort-arrows">
                  <FontAwesomeIcon className="sort-arrow" icon={faSortUp} onClick={() => this.sortPlayersByNationality('asc')} />
                  <FontAwesomeIcon className="sort-arrow" icon={faSortDown} onClick={() => this.sortPlayersByNationality('desc')} />
                </div>
              </div>
              </th>
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
    );
  }
}

export default PlayersList;
