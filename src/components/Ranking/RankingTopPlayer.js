import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './rankingtopplayer.scss';

export class RankingTopPlayer extends Component {

  render() {

    let imageStyle = {
      border: '10px solid' + this.props.color
    };

    let pointsStyle = {
      backgroundColor: this.props.color
    }

    return (

     <div className="top-player">
        <Link to={'/player/' + this.props.player.id}><img className="top-player__image" style={imageStyle} src="/img/players/lotar.png" alt="zawodnik"/></Link> {/*'/img/players/' + this.props.player.id + this.props.player.lastName + '.jpg'*/}
        <Link to={'/player/' + this.props.player.id} className="top-player__name">{this.props.player.firstName + ' ' + this.props.player.lastName}</Link>
       <img className="top-player__flag" src={'/img/flags/' + this.props.player.nationality + '.svg'} alt="Poland"/>
        <div className="top-player__points" style={pointsStyle}>{this.props.player.point}</div>
     </div> 
    );
  }
}

export default RankingTopPlayer;
