import React, { Component } from 'react';
import RankingTopPlayer from './RankingTopPlayer';
import Loader from '../Loader/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Range, createSliderWithTooltip } from 'rc-slider';
import ChipInput from 'material-ui-chip-input';
import TextField from '@material-ui/core/TextField';
import RankingTable from './RankingTable';
import 'rc-slider/assets/index.css'
import './ranking.scss';

const SliderWithTooltip = createSliderWithTooltip(Range);

class Ranking extends Component {

  constructor(props) {
    super(props);
    this.state = {
      players: null,
      playersOrigin: null,
      nationalityFilter: ['POL'],
      ageFilterLeft: 0,
      ageFilterRight: 40,
    };
  }

  componentDidMount() {
    fetch('https://fsranking.herokuapp.com/rankings/battle')
      .then(response => response.json())
      .then(json => this.setState({
        playersOrigin: json,
        players: json,
      }));
  }

  showFilters() {
    document.querySelector('.filters').classList.add('filters--open');
    document.querySelector('.show-filters-wrapper').classList.add('show-filters-wrapper--clicked');
  }

  closeFilters() {
    document.querySelector('.filters').classList.remove('filters--open');
    document.querySelector('.show-filters-wrapper').classList.remove('show-filters-wrapper--clicked');
  }

  filterByAge(value) {

    let min = value[0];
    let max = value[1];

    let players = this.state.playersOrigin.filter((player) => player.age >= min && player.age <= max);

    this.setState({
      players: players,
    });
  }

  filterByNationality(event) {
    console.log('filter by nationality');
    this.setState({ nationalityFilter: event.target.value });
  }

  render() {
    let top3 = [];
    let players = [];

    if (this.state.players !== null && this.state.players !== []) {
      this.state.players.sort((a, b) => (-1) * (a.points - b.points))
      top3 = this.state.players.slice(0, 3);
      players = this.state.players.slice(3, this.state.players.length);
    }

    if (this.state.playersOrigin === null) {
      return (
        <Loader color="#010021" height="200" width="200" />
      );
    }

    return (
      <section className="ranking">

        <div className="filters">
          <h3 className="filters-title">Filtry:</h3>
          <button type="button" className="filters__sharp" onClick={this.closeFilters}><FontAwesomeIcon icon={faTimes} /></button>
          <h4 className="filter-title">Filtr daty:</h4>
          <form>
            <TextField id="dateFrom" variant="outlined" type="date" defaultValue="2007-01-01" className="filter__date"
              InputProps={{
                className: 'filter__date-input',
              }} />
            <TextField id="dateTo" variant="outlined" type="date" defaultValue="2018-12-20" className="filter__date" InputProps={{
              className: 'filter__date-input',
            }} />
          </form>
          <h4 className="filter-title">Filtr wieku:</h4>
          <SliderWithTooltip className="filter-slider" allowCross={false} min={0} max={2018} defaultValue={[0, 2018]} onChange={(value) => this.filterByAge(value)} />
          <h4 className="filter-title">Filtr narodowosci:</h4>
          <ChipInput className="filter__chip" variant="outlined"
            placeholder="Wpisz nazwę kraju" onAdd={(event) => this.filterByNationality(event)}
            InputProps={{
              className: 'chip__input',
            }}
          />
          <h4 className="filter-title">Filtr kategorii:</h4>
          <ChipInput className="filter__chip" variant="outlined"
            placeholder="Wpisz nazwę kategorii"
            InputProps={{
              className: 'chip__input',
            }}
          />
        </div>

        <div className="show-filters-wrapper">
          <button className="show-filters-button" onClick={() => this.showFilters()}>Filtruj ranking</button>
        </div>

        <ul className="ranking__top-list">
          <RankingTopPlayer player={top3[0]} color='#ffd700' />
          <RankingTopPlayer player={top3[1]} color='#c0c0c0' />
          <RankingTopPlayer player={top3[2]} color='#905923' />
        </ul>
        <RankingTable players={players} />
      </section>

    );
  }
}

export default Ranking;
