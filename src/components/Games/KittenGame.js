import React, { Component } from "react";
import Sidebar from "../Sidebar";
import HeaderText from "../HeaderText";
import "./Games.scss";
import MainBtn from "../MainBtn";

import VideoSidebar from "../Video/VideoSidebar";

class KittenGame extends Component {
  /* Time goes from 0 to 60 seconds.
Kittens and hedgehogs appear at a random place in the grid for a limited time. 
The key is to collect the kittens as fast as possible.
One idea to implement it is to have appearTime and hideTime defined for all kittens and hedgehogs.

Kittens = [{appearTime, hideTime}, {appearTime, hideTime}, ...]
Kittens = [{23.1,24.2},{10.2,11.5},...]
Hedgehogs = [{appearTime, hideTime}, {appearTime, hideTime}, ...]

hideTime should be a couple of seconds after appearTime. */

  state = {
    isRunning: false,
    time: 0,
    interval: 0,
    randHeight: "20px",
    randWidth: "20px",
    kittens: []
  };

  handleStart = () => {
    if (!this.state.isRunning) {
      //call the tick func every 0.1s
      let interval = setInterval(() => this.tick(), 100);
      this.setState({
        interval,
        isRunning: true
      });
    }
  };

  tick = () => {
    const { interval, time } = this.state;
    let finishTime = 100; //should be 60s*10
    // let finish = 5; //should be 60s

    this.setState({
      time: time + 1
    });

    //draw kitten every 5% of the time
    if (Math.random() < 0.05) this.drawKitten();

    if (time > finishTime) {
      clearInterval(interval);

      this.setState({
        time: 0,
        isRunning: false
      });
    }
  };

  //hide kitten after 1s
  drawKitten = () => {
    let tmpKitten = { id: Math.random() };

    let kittens = [...this.state.kittens, tmpKitten];

    this.setState({
      kittens
    });

    console.log("drawKitten", kittens);

    setTimeout(() => this.hideKitten(tmpKitten.id), 1000);
  };

  hideKitten = id => {
    const kittens = this.state.kittens.filter(k => k.id !== id);
    this.setState({
      kittens
    });

    console.log("hideKitten", kittens);
  };

  randomPos = () => {
    const height = "380";
    const width = "480";

    let randHeight = Math.floor(Math.random() * height) + "px";
    let randWidth = Math.floor(Math.random() * width) + "px";

    this.setState({
      randHeight,
      randWidth
    });
  };

  render() {
    const { randHeight, randWidth, time } = this.state;
    //  console.log("randHeight", randHeight);
    //  console.log("randWidth", randWidth);

    // style={{ cursor: "pointer" }}
    return (
      <div className="row">
        <div className="col-12">
          <div className="game-section">
            <header>
              <HeaderText componentName={this.constructor.name} />
            </header>

            <div className="row">
              <div className="col-12 col-md-10 col-xl-7">
                <div className="game-square">
                  {/*  {items.map(item =>
                    <span className="item" style={{ top: randHeight, left: randWidth }}>
                      {item}
                    </span>
                  )} */}

                  <span className="item" style={{ top: randHeight, left: randWidth }}>
                    {this.state.kittens.length}
                  </span>
                </div>
              </div>

              <div className="col-12 col-md-2 col-xl-5">
                <div className="counter">
                  <h2>
                    {Math.floor(time / 10)}
                    {/*  {time} */}
                  </h2>
                </div>

                <MainBtn classProp="button start-btn" clickProp={this.handleStart}>
                  Start game
                </MainBtn>
                <MainBtn classProp="button start-btn" clickProp={this.randomPos}>
                  New pos
                </MainBtn>
              </div>
            </div>

            {/* sidebar */}
            <div className="row">
              <div className="col-12 col-md-6">
                <Sidebar componentName={this.constructor.name} />
              </div>
              <div className="col-12 col-md-6">
                <VideoSidebar
                  src="https://www.youtube.com/embed/YcCw6cS7Uy0"
                  height="230"
                  width="100%"
                  title="getting-started"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default KittenGame;
