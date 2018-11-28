import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './rankingtopplayer.scss';

class RankingTopPlayer extends Component {

  render() {

    let imageStyle = {
      border: '10px solid' + this.props.color
    };

    let pointsStyle = {
      backgroundColor: this.props.color
    }

    return (

      <div className="top-player">
        <Link to={'/player/' + this.props.player.idPlayer}>
          <img className="top-player__image" style={imageStyle} src={`/img/players/${this.props.player.idPlayer}_${this.props.player.lastName}.png`} alt={`${this.props.player.firstName}  ${this.props.player.lastName}`} onError={(e) => { e.target.onerror = null; e.target.src = "/img/players/notfound.png" }} />
          </Link>
        <Link to={'/player/' + this.props.player.idPlayer} className="top-player__name">{this.props.player.firstName + ' ' + this.props.player.lastName}</Link>
        <img className="top-player__flag" src={'/img/flags/' + this.props.player.nationality + '.svg'} alt="Poland" />
        <div className="top-player__points" style={pointsStyle}>{this.props.player.points}</div>
      </div>
    );
  }
}

export default RankingTopPlayer;
