import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import MainBtn from '../MainBtn';
import './Timing.scss';

class Speed extends Component { //class based
    state = {
        errorMessage: ''
    };


    handleStart = () => {
        console.log('start');
    }

    handleStop = () => {
        console.log('stop');
    }

    /* compare = (compareValue) => {

       e.preventDefault();
      console.log(this.state.inputStr);

      let errMessage = '';
      if (compareValue === this.state.concatStr) {
          errMessage = 'Success!';
      }
      else
          errMessage = 'Fail!';

      this.setState({
          errorMessage: errMessage
      })
  } */

    render() {

        return (
            <div className="row justify-content-between">
                <div className="col-12 col-md-6">
               
                    <div className="timing-section">
                        <header>
                            <h1 className="">Speed</h1>
                            <p>This game tests the user reaction time. This is also useful to show-case test automation render waits. </p>
                            <p> The game start with the user hitting "Start Game" button. Another button "End Game" will appear after x seconds,</p>
                            <p> where x is random time between 1 and 10 seconds. The smaller the number of milliseconds, the better. </p>
                        </header>

                        <MainBtn classProp="button green-btn" titleProp="Start" clickProp={this.handleStart} />

                        <MainBtn classProp="button red-btn" titleProp="Stop" clickProp={this.handleStop} />

                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <Sidebar heading="Why learn: Speed?" text="A classic problem in test automation is render waits. If certain elements are taking long to render, the test might fail. On the other hand, if we create long delays the overall test takes too long to run. Best if is we can wait until an element appears, but then click it as fast as we can.  " />

                </div>

            </div>
        )
    }
}

export default Speed