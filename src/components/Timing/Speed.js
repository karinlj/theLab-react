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

                <div className="col-12 col-md-4">
                    <Sidebar heading="Hello Speed" text="Ut eros justo, fringilla vulputate ultricies vel, volutpat in nisi. Mauris vitae mauris tortor. Nam vehicula rhoncus erat eget bibendum." />

                </div>

            </div>
        )
    }
}

export default Speed