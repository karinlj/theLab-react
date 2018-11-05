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
                            <p> As opposed to speed game, this game tests the users time perception skill. This is also useful to showcase delay functionality in testing. </p>
                             <p>The game is started by clicking “Start Game”. When clicked, an "End Game" button is displayed and a computer counter start counting seconds.  
                             The goal is to hit the "End Game" button after exactly 5 seconds. </p>
                             <p> The goal is to have as few milliseconds as possible above 5 seconds.</p>
                        </header>

                        <MainBtn classProp="button green-btn" titleProp="Start" clickProp={this.handleStart} />

                        <MainBtn classProp="button red-btn" titleProp="Stop" clickProp={this.handleStop} />

                    </div>

                </div>

                <div className="col-12 col-md-4">
                    <Sidebar heading="Hello Wait" text="Why learn: Wait? Sometimes there is a necessity to wait a certain time to make sure the application catches up. In test automation, being reactive is not always the best medcine, and sometimes it pays off to be patient." />

                </div>

            </div>
        )
    }
}

export default Wait