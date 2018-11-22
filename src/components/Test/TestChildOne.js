import React, { Component } from 'react';

class TestChildOne extends Component {
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
                <h2 onClick={this.titleClicked}>TestChildOne - click on me!</h2>
            </div>
        );
    }
}
export default TestChildOne