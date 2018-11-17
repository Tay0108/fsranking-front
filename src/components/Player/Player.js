import React, { Component } from 'react';
import './player.scss';
import Loader from '../Loader/Loader';
import { Line as LineChart, Bar as BarChart } from 'react-chartjs';

export class Player extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        fetch('https://fsranking.herokuapp.com/players/' + this.props.match.params.id) // + this.param.id
            .then(response => response.json())
            .then(json => this.setState(json));
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
            labels: [1, 2, 3, 4, 5, 6, 7],
            datasets: [
                {
                    label: "Pozycja w rankingu battle:",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [11, 14, 5, 8, 4, 15, 4]
                },
            ]
        };

        let battlePositionChartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "Pozycja w rankingu battle:",
                    fillColor: "rgba(220,220,220,0.2)",
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
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [20, 120, 240, 250, 250, 250, 300]
                },
            ]
        };

        let battlePlacesChartOptions = {};
        let battlePositionChartOptions = {};
        let battlePointsChartOptions = {};

        return (
            this.state === {} ?
                (<Loader
                    color="#010021"
                    height="200"
                    width="200"
                />)
                :
                (<div className="player">
                    <img className="player__image" src="/img/players/szymo.png" alt="to jest Szymo" style={imageStyle} />
                    <span className="player__name">{`${this.state.firstName} "${this.state.nick}" ${this.state.lastName}`}</span>
                    <img className="player__flag" src={`/img/flags/${this.state.nationality}.svg`} alt="Poland" />


                    <div className="player__charts">
                        <h3 className="player__title">Statystyki:</h3>
                        <select className="charts__select">
                            <option>Battle</option>
                            <option>Challenge</option>
                            <option>Routine</option>
                        </select>
                        <BarChart data={battlePlacesChartData} options={battlePlacesChartOptions} />
                        <select className="charts__select">
                            <option>Battle</option>
                            <option>Challenge</option>
                            <option>Routine</option>
                        </select>
                        <LineChart data={battlePositionChartData} options={battlePositionChartOptions} />
                        <select className="charts__select">
                            <option>Battle</option>
                            <option>Challenge</option>
                            <option>Routine</option>
                        </select>
                        <LineChart data={battlePointsChartData} options={battlePointsChartOptions} />
                    </div>

                    <h3 className="player__title">Historia startów:</h3>
                    <table className="player__history">
                    </table>

                </div>)
        );
    }
}

export default Player;
