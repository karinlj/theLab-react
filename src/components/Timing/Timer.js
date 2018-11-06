import React, { Component } from 'react'
import ButtonTimer from './ButtonTimer';
import './Timing.scss';
import ElapsedTime from './ElapsedTime';

class Timer extends Component { //class based

    constructor(props) { //need this to use poll() from react
        super(props)

        this.state = {  //debits - credits
            timerEvents: [],
            nonce: 0,   //value always incrementing
        };

        this.poll = setInterval(this.tick, 1000)

        //samma som arrow func: this.addTimerEvent = this.addTimerEvent.bind(this) 
        //så att'this' refererar till componenten och inte till funktionen
    }

    tick = () => {
        /*   this.setState({
              nonce: this.state.nonce + 1
          }) */
        this.setState((prevState) => ({
            nonce: prevState.nonce + 1
        })
        )
    }

    addTimerEvent = () => {
        this.setState({
            timerEvents: [ //in new var: old array spread out and adding new timerEvent
                ...this.state.timerEvents,
                new Date()
            ]
        })
    }
    //every time state or props changes, the render function rerenders the component
    render() {
        return (
            <div>
                <h1>Stop watch</h1>

                <div className="timer-wrapper">

                    <ElapsedTime timerEventsProp={this.state.timerEvents} />

                    <ButtonTimer handleClickProp={this.addTimerEvent}
                        timerEventsProp={this.state.timerEvents} />
                </div>




            </div>

        )
    }
}

export default Timer