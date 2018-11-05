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
                            <p>“Don’t be too fast, don’t be too slow”: Show a button that can be clicked “Start Game”. When clicked display another button that can be clicked “End Game”.</p>
                            <p> When clicked the response varies the following way, where T is time. </p>
                            <ul>
                                <li>a. T &lt;  5s: “Fail. Too soon”</li>
                                <li>b. 5s &lt; T &gt; 10 s: “Success”</li>
                                <li> c. T &gt; 10s: “Fail. Too late”</li>
                            </ul>
                        </header>

                        <MainBtn classProp="button green-btn" titleProp="Start" clickProp={this.handleStart} />

                        <MainBtn classProp="button red-btn" titleProp="Stop" clickProp={this.handleStop} />

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