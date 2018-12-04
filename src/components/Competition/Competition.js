import React, { Component } from 'react';
import './competition.scss';
import Loader from '../Loader/Loader';

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

        if (this.state.name === undefined) {
            return (<Loader
                color="#010021"
                height="200"
                width="200"
            />);
        }

        return (
            <div className="competition">
                <h2 className="competition__name">{this.state.name}</h2>
                <h3 className="competition__title">Lokalizacja: {this.state.location}</h3>
                <h3 className="competition__title">Waga: {this.state.importance}</h3>
                <h3 className="competition__title">Top16:</h3>
            </div>
        );
    }

}

export default Competition;
