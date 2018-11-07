import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import MainBtn from '../MainBtn';

class Wait extends Component { //class based

    state = {
        isRunning: false,
        offsetTime: 0,
        stopClass: 'button red-btn invisible',

        errorMessage: ''
    }

    handleStart = () => {
        if (!this.state.isRunning) {
            this.setState({
                offsetTime: Date.now(),
                stopClass: 'button red-btn visible',
                errorMessage: '',
                isRunning: true
            })
        }
        console.log("offsetTime is ", this.state.offsetTime);
    }


    delta = () => {
        let now = Date.now();
        let timePassed = now - this.state.offsetTime

        this.setState({ //new start point
            offsetTime: now
        })

        console.log("timePassed is ", timePassed);
        return timePassed  //passing value from timePassed
    }

    compare = () => {
        let delta = this.delta(); //calling delta func with passed value from timePassed
        console.log("timePassed is ", delta);

        let errMessage = '';
        let limit = 5000;

        if (delta >= limit) {
            errMessage = 'Success!' + (delta - limit);
        }
        else
            errMessage = 'Fail!';

        this.setState({
            errorMessage: errMessage
        })
    }

    handleStop = () => {
        if (this.state.isRunning) {
            this.compare();   //calling compare func

            this.setState({
                stopClass: 'button red-btn invisible',
                isRunning: false
            })
        }
        console.log("offsetTime is ", this.state.offsetTime);
    }

    render() {

        return (
            <div className="row justify-content-between">
                <div className="col-12 col-md-6">
                    <div className="timing-section">
                        <header>
                            <h1 className="">Wait game</h1>
                            <p> As opposed to speed game, this game tests the users time perception skill. This is also useful to showcase delay functionality in testing. </p>
                            <p>The game is started by clicking “Start Game”. When clicked, an "End Game" button is displayed and a computer counter start counting seconds.
                             The goal is to hit the "End Game" button after exactly 5 seconds. </p>
                            <p> The goal is to have as few milliseconds as possible above 5 seconds.</p>
                        </header>

                        <div className="btn-and-message higher">
                            <div>
                                <MainBtn classProp="button green-btn" titleProp="Start game" clickProp={this.handleStart} />

                                <MainBtn classProp={this.state.stopClass} titleProp="End game" clickProp={this.handleStop} />
                            </div>

                            <div className="error-message">{this.state.errorMessage}</div>
                        </div>

                    </div>

                </div>

                <div className="col-12 col-md-5">
                    <Sidebar heading="Hello Wait" text="Why learn: Wait? Sometimes there is a necessity to wait a certain time to make sure the application catches up. In test automation, being reactive is not always the best medcine, and sometimes it pays off to be patient." />

                </div>

            </div>
        )
    }
}

export default Wait