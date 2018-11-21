import React, { Component} from 'react';
import './competition.scss';
import Loader from '../Loader/Loader';

class Competition extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        fetch('https://fsranking.herokuapp.com/competitions/' + this.props.match.params.id) // + this.param.id
            .then(response => response.json())
            .then(json => this.setState(json));
    }

    render() {
        return (
            this.state.name === undefined ?
            (<Loader
                color="#010021"
                height="200"
                width="200"
            />)
            : (
            <div className="competition">
            {this.state.name}
            {this.state.location.name}
            </div>
            )
        );
    }

}

export default Competition;
