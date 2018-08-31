import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch('http://fsranking.herokuapp.com/mock/players')
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
          type="Puff"
          color="#010021"
          height="100"	
          width="100"
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
