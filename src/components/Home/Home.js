import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import './style.css';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch('https://fsranking.herokuapp.com/mock/players')
      .then(response => response.json())
      .then(json => this.setState({players: json}));
  }

  render() {
    let players = this.state.players || [];
    return (
      <div className="home">
        <h1>Ranking Polski Battle</h1>
        {
        players.length === 0 ?
        (<Loader
          color="#010021"
          height="200"	
          width="200"
        />)
        :
        (<table className="home-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Zawodnik</th>
              <th>Narodowosć</th>
              <th>Punkty</th>
            </tr>
          </thead>
          <tbody>
            {
              players.map((u, id) =>
                (<tr key={id}>
                  <td>{u.id}</td>
                  <td>{u.nick}</td>
                  <td>{u.nationality}</td>
                  <td>{u.points}</td>
                </tr>)
              )
            }
          </tbody>
        </table>)
        }
      </div>
    )
  }
}

export default Home;