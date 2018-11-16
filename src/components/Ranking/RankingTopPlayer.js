import React, { Component } from 'react';
import './rankingtopplayer.scss';

export class RankingTopPlayer extends Component {

    constructor(props) {
    super(props);
  }

  render() {

    let imageStyle = {
      border: '10px solid' + this.props.color
    };

    let pointsStyle = {
      backgroundColor: this.props.color
    }

    console.log(this.props.color);

    return (

     <div className="top-player">
        <img className="top-player__image" style={imageStyle} src={'/img/players/' + this.props.player.image} alt="zawodnik"/>
        <span className="top-player__name">{this.props.player.nick}</span>
        <img className="top-player__flag" src={'/img/flags/' + this.props.player.nationality + '.svg'} alt="Poland"/>
        <div className="top-player__points" style={pointsStyle}>{this.props.player.point}</div>
     </div> 
    )
  }
}

export default RankingTopPlayer;
