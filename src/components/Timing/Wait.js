import React, { Component } from "react";
import Sidebar from "../Sidebar";
import MainBtn from "../MainBtn";
import HeaderText from "../HeaderText";
import VideoSidebar from "../Video/VideoSidebar";
import "./Timing.scss";

class Wait extends Component {
  //class based

  state = {
    isRunning: false,
    offsetTime: 0,
    stopClass: "button stop-btn",
    message: "",
    messageClass: "message", //invisible
    messageSmall: ""
  };

  handleStart = () => {
    if (!this.state.isRunning) {
      this.setState({
        offsetTime: Date.now(),
        stopClass: "button stop-btn show",
        message: "",
        messageClass: "message", //invisible
        messageSmall: "",
        isRunning: true
      });
    }
    // console.log("offsetTime is ", this.state.offsetTime);
  };

  delta = () => {
    let now = Date.now();
    let elapsedTime = now - this.state.offsetTime;

    this.setState({
      offsetTime: now //new start point?
    });
    return elapsedTime; //passing value from timePassed
  };

  compare = () => {
    let delta = this.delta(); //calling delta func with passed value
    // console.log("timePassed is ", delta);

    let messageNew = "";
    let limit = 5000;
    let overflow;

    if (delta >= limit) {
      messageNew = "Success!"; //need better output
      overflow = delta - limit + " ms above 5 seconds.";
    } else messageNew = "Fail!";

    this.setState({
      message: messageNew,
      messageClass: "message show",
      messageSmall: overflow
    });
  };

  handleStop = () => {
    if (this.state.isRunning) {
      this.compare(); //calling compare func

      this.setState({
        stopClass: "button stop-btn",
        isRunning: false
      });
    }
    // console.log("offsetTime is ", this.state.offsetTime);
  };

  render() {
    return (
      <div className="row justify-content-between">
        <div className="col-12 col-md-6">
          <div className="timing-section">
            <header>
              <HeaderText componentName={this.constructor.name} />
            </header>

            <div className="btn-and-message higher">
              <div>
                <MainBtn classProp="button start-btn" clickProp={this.handleStart}>
                  Start game
                </MainBtn>

                <MainBtn classProp={this.state.stopClass} clickProp={this.handleStop}>
                  End game
                </MainBtn>
              </div>

              <div className={this.state.messageClass}>
                <h4>
                  {this.state.message}
                </h4>
                <p>
                  {this.state.messageSmall}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-5">
          <Sidebar componentName={this.constructor.name} />
          <VideoSidebar
            src="https://www.youtube.com/embed/0uanO5fNJYc"
            height="230"
            width="100%"
            title="getting-started"
          />
        </div>
      </div>
    );
  }
}

export default Wait;
