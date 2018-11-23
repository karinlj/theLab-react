import React, { Component } from 'react';
import './Test.scss';

class TestChildOne extends Component {
    state = {
        count: 1
    }

    titleClicked = (e) => {
        e.preventDefault();
        const { dataCallback } = this.props;  // =const dataCallback = this.props.dataCallback;
        if (dataCallback !== undefined) {
            dataCallback('hello you!!'); //calling the fuction handleDataCallback from parentComp passing argument

        }
    }

    formatCount = () => {
        const { count } = this.state;
        // const x = <h5>Zero</h5>;  //jsx expression in a variable is fine
        const x = 'Zero';  //jsx expression in a variable

        return (
            count === 0 ? x : count  //om count=0, skriv ut x, annars skriv ut count
        )
    }

    handleIncrement = () => {
        console.log('hej');
        this.setState({
            count: this.state.count + 1  //just increment by 1
        })
    }
    render() {

        let countClasses = 'button ';
        const { count } = this.state;
        countClasses += (count === 0 ? 'yellow-btn' : 'turquoise-btn');

        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h4 onClick={this.titleClicked}>TestChildOne - nested component - click on me!</h4>

                        <h5>Dynamic classes and counter</h5>
                        <span className={countClasses}>{this.formatCount()}</span>
                        <button
                            onClick={this.handleIncrement} className='button green-btn'>Increment</button>


                    </div>
                </div>
            </div>
        );
    }
}
export default TestChildOne