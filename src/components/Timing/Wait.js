import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import MainBtn from '../MainBtn';

class Wait extends Component { //class based
    state = {

    };

    handleStart = () => {
        console.log('start');
    }

    handleStop = () => {
        console.log('stop');
    }

    render() {

        return (
            <div className="row justify-content-between">
                <div className="col-12 col-md-6">
                    <div className="timing-section">
                        <header>
                            <h1 className="">Wait</h1>
                            <p>“Wait and click as fast as you can”: Show a button that starts the game “Start Game”. </p>
                            <p> Wait random rt (0s &lt;  rt &lt;  60s) with displaying another button “End Game”.</p>
                            <p> When End Game is clicked show “Success” and separate score of (t-rt), which i how long it took to hit button</p>
                        </header>

                        <MainBtn classProp="button green-btn" titleProp="Start" clickProp={this.handleStart} />

                        <MainBtn classProp="button red-btn" titleProp="Stop" clickProp={this.handleStop} />

                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <Sidebar heading="Hello Wait" text="Why learn: Wait? Sometimes there is a necessity to wait a certain time to make sure the application catches up. Being reactive is not always the best medecine in all cases." />

                </div>

            </div>
        )
    }
}

export default Wait