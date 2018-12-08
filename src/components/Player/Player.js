import React, { Component } from 'react';
import './player.scss';
import Loader from '../Loader/Loader';
import { Line as LineChart, Bar as BarChart } from 'react-chartjs';
import { Link } from 'react-router-dom';
import stable from 'stable';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Player extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        fetch('https://fsranking.herokuapp.com/players/' + this.props.match.params.id)
            .then(response => response.json())
            .then(json => this.setState(json));

        fetch('https://fsranking.herokuapp.com/players/' + this.props.match.params.id + '/history')
            .then(response => response.json())
            .then(json => this.setState({ history: json }));
    }

    sortHistoryByPlace(direction) {
        console.log('sorting by place ' + direction);
        const asc = (a, b) => (a.place - b.place);
        const desc = (a, b) => (b.place - a.place);
        let historyCopy = this.state.history;

        if (direction === 'asc') {
            stable.inplace(historyCopy, asc);
        } else if (direction === 'desc') {
            stable.inplace(historyCopy, desc);
        }
        this.setState({ history: historyCopy });
    }

    sortHistoryByCompetition(direction) {
        console.log('sorting history by competition name' + direction);
        const asc = (a, b) => String(a.competition.name).localeCompare(b.competition.name);
        const desc = (a, b) => (-1) * String(a.competition.name).localeCompare(b.competition.name);
        let historyCopy = this.state.history;

        if (direction === 'asc') {
            stable.inplace(historyCopy, asc);
        } else if (direction === 'desc') {
            stable.inplace(historyCopy, desc);
        }
        this.setState({ history: historyCopy });
    }

    sortHistoryByCategory(direction) {
        console.log('sorting history by category ' + direction);
        const asc = (a, b) => String(a.category).localeCompare(b.category);
        const desc = (a, b) => (-1) * String(a.category).localeCompare(b.category);
        let historyCopy = this.state.history;

        if (direction === 'asc') {
            stable.inplace(historyCopy, asc);
        } else if (direction === 'desc') {
            stable.inplace(historyCopy, desc);
        }
        this.setState({ history: historyCopy });
    }

    sortHistoryByDate(direction) {
        console.log('sorting history by date ' + direction);

        const asc = function (a, b) {
            if (new Date(a.date).getTime() > new Date(b.date).getTime()) {
                return 1;
            } else if (new Date(a.date).getTime() < new Date(b.date).getTime()) {
                return -1;
            }
            else {
                return 0;
            }
        }
        const desc = function (a, b) {
            if (new Date(a.date).getTime() > new Date(b.date).getTime()) {
                return -1;
            } else if (new Date(a.date).getTime() < new Date(b.date).getTime()) {
                return 1;
            }
            else {
                return 0;
            }
        }
        let historyCopy = this.state.history;

        if (direction === 'asc') {
            stable.inplace(historyCopy, asc);
        } else if (direction === 'desc') {
            stable.inplace(historyCopy, desc);
        }
        this.setState({ history: historyCopy });
    }

    validateData() {
        return this.state.firstName !== undefined && this.state.history !== undefined;
    }

    render() {
        let imageStyle = {
            border: '10px solid #000000'
        };

        if (this.props.color != null) {
            imageStyle = {
                border: '10px solid' + this.props.color
            };
        }

        let battlePlacesChartData = {
            labels: ['1wszy', '2gi', '3ci', '4ty', '5ty', '6ty', '7my', '8my', '9ty', '10ty', '11ty', '12ty', '13ty', '14ty', '15ty', '16ty'],
            datasets: [
                {
                    label: "Pozycja w rankingu battle:",
                    fillColor: "rgba(220,220,220,0.4)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [11, 14, 5, 8, 4, 15, 4, 2, 12, 2, 5, 24, 5, 4, 2, 1]
                },
            ]
        };

        let battlePositionChartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "Pozycja w rankingu battle:",
                    fillColor: "rgba(220,220,220,0.4)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [-15, -5, -1, -2, -2, -3, -2]
                },
            ]
        };

        let battlePointsChartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "Pozycja w rankingu battle:",
                    fillColor: "rgba(220,220,220,0.4)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [20, 120, 240, 250, 250, 250, 300]
                },
            ]
        };

        let battlePlacesChartOptions = {
            scaleFontColor: "#ffffff",
        };
        let battlePositionChartOptions = {
            scaleFontColor: "#ffffff",
        };
        let battlePointsChartOptions = {
            scaleFontColor: "#ffffff",
        };

        let i = 0;

        if (!this.validateData()) {
            return (<Loader
                color="#010021"
                height="200"
                width="200"
            />);
        }

        return (
            <div className="player">
                <img className="player__image" src={`/img/players/${this.state.id}_${this.state.lastName}.png`} alt={`${this.state.firstName}  ${this.state.lastName}`} style={imageStyle} onError={(e) => { e.target.onerror = null; e.target.src = "/img/players/notfound.png" }} />
                <span className="player__name">{`${this.state.firstName} "${this.state.nick}" ${this.state.lastName}`}</span>
                <img className="player__flag" src={`/img/flags/${this.state.nationality}.svg`} alt="Poland" />

                <ul className="player__social-media">

                </ul>
                <div className="player__charts">
                    <h3 className="player__title">Statystyki:</h3>
                    <select className="charts__select">
                        <option>Battle</option>
                        <option>Challenge</option>
                        <option>Routine</option>
                    </select>
                    <BarChart className="charts__chart" data={battlePlacesChartData} options={battlePlacesChartOptions} />
                    <select className="charts__select">
                        <option>Battle</option>
                        <option>Challenge</option>
                        <option>Routine</option>
                    </select>
                    <LineChart className="charts__chart" data={battlePositionChartData} options={battlePositionChartOptions} />
                    <select className="charts__select">
                        <option>Battle</option>
                        <option>Challenge</option>
                        <option>Routine</option>
                    </select>
                    <LineChart className="charts__chart" data={battlePointsChartData} options={battlePointsChartOptions} />
                </div>

                <h3 className="player__title">Historia startów:</h3>
                <table className="player__history">
                    <thead className="history__header">
                        <tr>
                            <th><div className="th-wrapper"><span className="history__column-name">Miejsce</span>
                                <div className="history__sort-arrows">
                                    <FontAwesomeIcon className="sort-arrow" icon={faSortUp} onClick={() => this.sortHistoryByPlace('asc')} />
                                    <FontAwesomeIcon className="sort-arrow" icon={faSortDown} onClick={() => this.sortHistoryByPlace('desc')} />
                                </div>
                            </div>
                            </th>
                            <th><div className="th-wrapper"><span className="history__column-name">Zawody</span>
                                <div className="history__sort-arrows">
                                    <FontAwesomeIcon className="sort-arrow" icon={faSortUp} onClick={() => this.sortHistoryByCompetition('asc')} />
                                    <FontAwesomeIcon className="sort-arrow" icon={faSortDown} onClick={() => this.sortHistoryByCompetition('desc')} />
                                </div>
                            </div>
                            </th>
                            <th><div className="th-wrapper"><span className="history__column-name">Konkurencja</span>
                                <div className="history__sort-arrows">
                                    <FontAwesomeIcon className="sort-arrow" icon={faSortUp} onClick={() => this.sortHistoryByCategory('asc')} />
                                    <FontAwesomeIcon className="sort-arrow" icon={faSortDown} onClick={() => this.sortHistoryByCategory('desc')} />
                                </div>
                            </div>
                            </th>
                            <th><div className="th-wrapper"><span className="history__column-name">Data</span>
                                <div className="history__sort-arrows">
                                    <FontAwesomeIcon className="sort-arrow" icon={faSortUp} onClick={() => this.sortHistoryByDate('asc')} />
                                    <FontAwesomeIcon className="sort-arrow" icon={faSortDown} onClick={() => this.sortHistoryByDate('desc')} />
                                </div>
                            </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.history.map((entry) =>
                            <tr key={i++} className="history__row">
                                <td><Link to={'/competition/' + entry.competition.id} className="history__link">{entry.place + '.'}</Link></td>
                                <td><Link to={'/competition/' + entry.competition.id} className="history__link">{entry.competition.name}</Link></td>
                                <td><Link to={'/competition/' + entry.competition.id} className="history__link">{entry.category}</Link></td>
                                <td><Link to={'/competition/' + entry.competition.id} className="history__link">{entry.date}</Link></td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>

            </div>
        );
    }
}

export default Player;
