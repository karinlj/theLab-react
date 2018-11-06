import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import MainBtn from '../MainBtn';

class Wait extends Component { //class based

    /*    constructor(props) { //need this to use poll() from react
           super(props)
   
           this.state = {  //debits - credits
               // timerEvents: []
               //nonce: 0,   //value always incrementing
           };
       } */

    state = {
        isRunning: false,
        time: 0,         // current time in ms
        // interval: null,  // on start will run update()
        startTime: 0,       // set to Date.now() --> time passed
    }

    handleStart = () => {
        if (!this.state.isRunning) {
            this.setState({
                //  interval: setInterval(this.update, 10),
                startTime: Date.now(),
                isRunning: true
            })
        }

        console.log(this.state.startTime);
    }


    handleStop = () => {
        if (this.state.isRunning) {
            // clearInterval(this.state.interval)
            this.setState({
                // interval: null,
                isRunning: false
            })
        }
    }

    reset = () => {
        this.setState({
            time: 0
        })
    }

    delta = () => {
        let now = Date.now();
        let timePassed = now - this.state.startTime
        this.setState({
            startTime: now
        })

        console.log(now);
        console.log(timePassed);


        return timePassed


    }


    /*   addTimerEvent = () => {
          console.log('start');
          this.setState({
              timerEvents: [ //in new var: old array spread out and adding new timerEvent
                  ...this.state.timerEvents,
                  new Date()
              ]
          })
          console.log(this.state.timerEvents);
  
      } */

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

                <div className="col-12 col-md-5">
                    <Sidebar heading="Hello Wait" text="Why learn: Wait? Sometimes there is a necessity to wait a certain time to make sure the application catches up. In test automation, being reactive is not always the best medcine, and sometimes it pays off to be patient." />

                </div>

            </div>
        )
    }
}

export default Wait