import React, { Component } from 'react';
import './Test.scss';

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
                <div className="card">
                    <div className="card-body">
                        <h4 onClick={this.titleClicked}>TestChildOne - nested component - click on me!</h4>

                    </div>
                </div>
            </div>
        );
    }
}
export default TestChildOne