import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faBullseye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './rankingtable.scss';

let place = 4;

class RankingTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidUpdate() {
        place = 4;
    }

    render() {

        function showPlayer(player) {

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

        if (this.props.players.length === 0) {
            return null;
        }

        return (
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
                    {this.props.players.map((player) => showPlayer(player))}
                </tbody>
            </table>
        );
    }
}

RankingTable.defaultProps = {
    players: [],
}

export default RankingTable;
