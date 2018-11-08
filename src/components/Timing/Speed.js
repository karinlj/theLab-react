
import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import MainBtn from '../MainBtn';

class Speed extends Component { //class based

    state = {
        isRunning: false,
        stopClass: 'button stop-btn',
        message: '',
        messageSmall: '',
        messageClass: 'message',  //invisible

        count: 0,
        startCount: 0,
        interval: null
    }

    handleStart = () => {
        if (!this.state.isRunning) {

            let startCount = Math.floor(Math.random() * 10000) + 1000; //random nr 1-10s
            // console.log('random' + startCount);

            this.setState({
                count: startCount,  //start counting down at randomnr
                stopClass: 'button stop-btn',
                message: '',  //reset
                messageSmall: '',
                messageClass: 'message',  //invisible
                isRunning: true
            })
            this.intervalUpdate();
        }
    }

    intervalUpdate = () => {
        let myInterval = setInterval(() => {   //this.myInterval

            // console.log("My count" + this.state.count);
            this.setState({
                count: this.state.count - 100,   // count down every second
                interval: myInterval
            })
            if (this.state.count < 0) {
                this.setState({
                    stopClass: 'button stop-btn show',
                })
            }
        }, 100)
    }


    handleStop = () => {
        if (this.state.isRunning) {
            // console.log('count ' + -this.state.count);

            clearInterval(this.state.interval);

            this.setState({
                isRunning: false
            })
        }
        this.message();
    }

    message = () => {
        let countOutput = -this.state.count;
        let messageNew = 'Wow! but...';
        let messageSmallNew = 'You clicked ' + countOutput + ' ms too late...';      //need better output

        this.setState({
            message: messageNew,
            messageSmall: messageSmallNew,
            messageClass: 'message show',
        })
    }


    render() {

        return (
            <div className="row justify-content-between">
                <div className="col-12 col-md-6">
                    <div className="timing-section">
                        <header>
                            <h1 className="">Speed game</h1>
                            <p>This game tests the user reaction time. This is also useful to show-case test automation render waits. </p>
                            <p> The game starts with the user hitting "Start Game" button. Another button "End Game" will appear after x seconds,
                            where x is random time between 1 and 10 seconds. </p>
                            <p>The user hits the button as fast as he can. The smaller the number of milliseconds above, the better.</p>
                        </header>

                        <div className="btn-and-message higher">
                            <div>
                                <MainBtn classProp="button start-btn" titleProp="Start game" clickProp={this.handleStart} />

                                <MainBtn classProp={this.state.stopClass} titleProp="End game" clickProp={this.handleStop} />
                            </div>

                            <div className={this.state.messageClass}>
                                <h4>{this.state.message}</h4>
                                <p>{this.state.messageSmall}</p>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="col-12 col-md-5">
                    <Sidebar heading="Why learn: Speed?" text="A classic problem in test automation is render waits. If certain elements are taking long to render, the test might fail. On the other hand, if we create long delays the overall test takes too long to run. Best if is we can wait until an element appears, but then click it as fast as we can.  " />

                </div>

            </div>
        )
    }
}

export default Speed

