import React, { Component } from 'react';
import './ranking.scss';
import RankingTopPlayer from './RankingTopPlayer';
import Loader from '../Loader/Loader';


export class Ranking extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch('https://fsranking.herokuapp.com/mock/players')
      .then(response => response.json())
      .then(json => this.setState({ players: json }));

  }

  render() {

    let players = this.state.players || [];
    players.sort((a, b) => -1 * (a.points - b.points));

    let top3 = [];

    top3.push(
      {
        color: '#ffd700',
        name: 'Szymon Skalski',
        points: '2053',
        image: 'szymo.png',
        nationality: 'pl'
      }
    );

    top3.push({
      color: '#c0c0c0',
      name: 'Pawel Skora',
      points: '1023',
      image: 'skora.png',
      nationality: 'pl'
    }
    );

    top3.push({
      color: '#905923',
      name: 'Mateusz Odrzygozdz',
      points: '543',
      image: 'lotar.png',
      nationality: 'pl'
    }
    );

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
            <li><RankingTopPlayer player={top3[1]} /></li>
            <li><RankingTopPlayer player={top3[0]} /></li>
            <li><RankingTopPlayer player={top3[2]} /></li>
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
                players.map((u, id) =>
                  (
                    <tr key={id} className="ranking__item"><td>{place++}.</td><td>{u.nick}</td><td>24</td><td><img className="ranking__flag" src={'/img/flags/pl.png'} alt="Poland" /></td><td>{u.points}</td><td>up</td></tr>
                  )
                )
              }
            </tbody>
          </table>
        </section>
        )
    )
  }
}

export default Ranking;
