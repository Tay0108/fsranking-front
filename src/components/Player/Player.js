import React, { Component } from 'react';
import './player.scss';

export class Player extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: 'firstName',
            lastName: 'lastName',
            nick: '',
            nationality: 'PL',
        };
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

        return (
            <div className="player">
                <img className="player__image" src="/img/players/szymo.png" alt="to jest Szymo" style={imageStyle} />
                <span className="player__name">{`${this.state.firstName} "${this.state.nick}" ${this.state.lastName}`}</span>
                <img className="player__flag" src={`/img/flags/${this.state.nationality}.svg`} alt="Poland" />
            </div>
        );
    }
}

export default Player;
