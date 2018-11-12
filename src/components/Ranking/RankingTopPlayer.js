import React, { Component } from 'react';
import './rankingtopplayer.scss';

export class RankingTopPlayer extends Component {

    constructor(props) {
    super(props);
    this.player = props.player;
  }

  render() {

    let imageStyle = {
      border: '10px solid' + this.player.color
    };

    let pointsStyle = {
      backgroundColor: this.player.color
    }

    console.log(this.props.color);

    return (

     <div className="top-player">
        <img className="top-player__image" style={imageStyle} src={'/img/players/' + this.player.image} alt="zawodnik"/>
        <span className="top-player__name">{this.player.name}</span>
        <img className="top-player__flag" src={'/img/flags/' + this.player.nationality + '.png'} alt="Poland"/>
        <div className="top-player__points" style={pointsStyle}>{this.player.points}</div>
     </div> 
    )
  }
}

export default RankingTopPlayer;
