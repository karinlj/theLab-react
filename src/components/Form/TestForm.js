import React, { Component } from 'react';
import './Form.scss';

class TestForm extends Component {
    state = {
    }

    titleClicked = (e) => {
        e.preventDefault();
        const { dataCallback } = this.props;  // =const dataCallback = this.props.dataCallback;
        if (dataCallback !== undefined) {
            dataCallback('hello you!!'); //calling the fuction handleDataCallback from parentComp passing argument

        }
    }

    render() {

        return (
            <div>
                <h1 onClick={this.titleClicked}>Testform</h1>
            </div>
        );
    }
}
export default TestForm