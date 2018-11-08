
import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import MainBtn from '../MainBtn';

class Speed extends Component { //class based

    state = {
        isRunning: false,
        stopClass: 'button stop-btn',
        message: '',
        messageClass: 'message',  //invisible

        count: 0,
        // startCount: 0,
        // interval: null
    }

    handleStart = () => {
        if (!this.state.isRunning) {

            let startCount = Math.floor(Math.random() * 10) + 1; //random nr 1-10
            console.log('random' + startCount);

            this.setState({
                count: startCount,  //start counting down at randomnr

                message: '',  //reset
                messageClass: 'message',  //invisible
                isRunning: true
            })

            // console.log('count after random ' + this.state.count);


            this.intervalUpdate();
        }
    }

    intervalUpdate = () => {
        this.myInterval = setInterval(() => {   //this.myInterval

            this.setState({
                count: this.state.count - 1,   // count down every second
                // interval: myInterval
            })
        }, 1000)
    }


    handleStop = () => {
        if (this.state.isRunning) {
            // this.compare();   //calling compare func

            // clearInterval(this.state.interval);

            if (this.state.count === 0) {
                this.setState({
                    stopClass: 'button stop-btn show',
                    isRunning: false
                })
            }
        }
    }






    delta = () => {
        // let now = Date.now();
        // let elapsedTime = now - this.state.offsetTime

        this.setState({
        })
        // return elapsedTime  //passing value from timePassed
    }

    compare = () => {
        let delta = this.delta(); //calling delta func with passed value 
        // console.log("timePassed is ", delta);

        let messageNew = '';
        let limit = 5000;
        //let overflow;

        if (delta >= limit) {
            messageNew = 'Success!' //need better output
            // overflow ='You reacted in'+  (delta - limit)  + '5 seconds.'
        }
        else
            messageNew = 'Fail!';

        this.setState({
            message: messageNew,
            messageClass: 'message show',
        })
    }


    render() {

        const { count } = this.state

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

                            <h2>{count}</h2>

                            <div className={this.state.messageClass}>
                                <h4>{this.state.message}</h4>
                                <p>{this.state.messageOverflow}</p>
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

