import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(function() {
      fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(json => this.setState({players: json}));
    }.bind(this), 6000);
  }

  render() {
    let players = this.state.players || [];
    return (
      <div className="home">
        <h1>Ranking globalny</h1>
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
              <th>Pozycja</th>
              <th>Zawodnik</th>
              <th>Trend</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {
              players.map((u, id) =>
                (<tr key={id}>
                  <td>{u.id}</td>
                  <td>{u.login}</td>
                  <td>{u.type}</td>
                  <td>{u.id}</td>
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
