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
                            <p>“Wait and click as fast as you can”: Show a button that starts the game “Start Game”. </p>
                            <p> Wait random rt (0s &lt;  rt &lt;  60s) with displaying another button “End Game”.</p>
                            <p> When End Game is clicked show “Success” and separate score of (t-rt), which i how long it took to hit button</p>
                        </header>

                        <MainBtn classProp="button green-btn" titleProp="Start" clickProp={this.handleStart} />

                        <MainBtn classProp="button red-btn" titleProp="Stop" clickProp={this.handleStop} />

                    </div>
                </div>

                <div className="col-12 col-md-5">
                    <Sidebar heading="Why learn: Speed?" text="A classic problem in test automation is render waits. If certain elements are taking long to render, the test might fail. On the otherhand, if we create lomg delays the overall test takes too long to run. Best if is we can wait until an eleemnt appears, but then click it as fast as we can.  " />

                </div>

            </div>
        )
    }
}

export default Speed