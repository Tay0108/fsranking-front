import React, { Component } from 'react'

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(json => this.setState({players: json}));
  }

  render() {
    let players = this.state.players || [];
    return (
      <div>
        <h1>Ranking globalny</h1>

        <table className="home-table">
          <tbody>
            <tr>
              <th>Pozycja</th>
              <th>Zawodnik</th>
              <th>Trend</th>
              <th>Points</th>
            </tr>
          </tbody>
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
        </table>
      </div>
    )
  }
}

export default Home;
