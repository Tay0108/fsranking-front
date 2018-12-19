import React, { Component } from 'react';
import './competition.scss';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';

class Competition extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        fetch('https://fsranking.herokuapp.com/competitions/' + this.props.match.params.id)
            .then(response => response.json())
            .then(json => this.setState(json));
    }

    render() {

        function showPlayer(player) {
            return (
                <tr key={player.player} className="top-players__row">
                    <td><Link to={'/player/' + player.player} className="top-players__link">{player.place}</Link></td>
                    <td><Link to={'/player/' + player.player} className="top-players__link">{player.player}</Link></td>
                    <td><Link to={'/player/' + player.player} className="top-players__link">{player.score}</Link></td>
                </tr>);
        }

        if (this.state.name === undefined) {
            return (<Loader color="#010021" height="200" width="200"/>);
        }

        return (
            <div className="competition">
                <h2 className="competition__name">{this.state.name}</h2>
                <h3 className="competition__title">Lokalizacja: {this.state.location}</h3>
                <h3 className="competition__title">Waga: {this.state.importance}</h3>
                <h3 className="competition__title">Top16:</h3>
                <table className="top-players__table">
                <thead className="top-players__header">
                    <tr>
                        <th>Miejsce</th>
                        <th>Id zawodnika</th>
                        <th>Punkty zdobyte</th>
                    </tr>
                </thead>
                <tbody className="top-players__body">
                    {this.state.battle.map((player) => showPlayer(player))}
                </tbody>
            </table></div>
        );
    }

}

export default Competition;
