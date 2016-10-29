import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { resetState } from '../actions/boilerplate';

class Boilerplate extends Component {

    constructor(props) {
        super(props);
        this.resetState = this.resetState.bind(this);
    }
    resetState() {
        return this.props.dispatch(resetState());
    }

    render() {
        return (
            <div>
                <button onClick={this.resetState}>Click me</button>
            </div>
        );
    }
}

Boilerplate.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default connect()(Boilerplate);  // adds dispatch prop