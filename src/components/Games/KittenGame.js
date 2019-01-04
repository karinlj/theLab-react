import React, { Component } from "react";
import Sidebar from "../Sidebar";
import HeaderText from "../HeaderText";
import "./Games.scss";
import MainBtn from "../MainBtn";
import CatIcon from "../../img/kitten-icon.png";

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
    kittens: [],
    points: 0
  };

  handleStart = () => {
    if (!this.state.isRunning) {
      //call the tick func every 0.1s
      let interval = setInterval(() => this.tick(), 100);
      this.setState({
        points: 0,
        interval,
        isRunning: true
      });
    }
  };

  tick = () => {
    const { interval, time } = this.state;
    let finishTime = 100; //should be 60s*10

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

  drawKitten = () => {
    const height = "380";
    const width = "580";

    let randHeight = Math.floor(Math.random() * height) + "px";
    let randWidth = Math.floor(Math.random() * width) + "px";
    const catIcon = <img src={CatIcon} alt="cat icon" />;

    let tmpKitten = { id: Math.random(), randHeight, randWidth, catIcon };

    let kittens = [...this.state.kittens, tmpKitten]; //new array, adding object to array

    this.setState({
      kittens
    });

    console.log("drawKitten", kittens);

    //hide kitten after 1s
    setTimeout(() => this.hideKitten(tmpKitten.id), 1000);
  };

  hideKitten = id => {
    const kittens = this.state.kittens.filter(k => k.id !== id);
    this.setState({
      kittens
    });

    console.log("hideKitten", kittens);
  };

  kittenClick = id => {
    this.hideKitten(id);
    this.setState({
      points: this.state.points + 1
    });
  };

  render() {
    const { time, points } = this.state;

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
                  {this.state.kittens.map(kitten =>
                    <h2
                      key={kitten.id}
                      className="kitten"
                      style={{ top: kitten.randHeight, left: kitten.randWidth }}
                      onClick={() => this.kittenClick(kitten.id)}
                    >
                      {kitten.catIcon}
                    </h2>
                  )}
                </div>
              </div>

              <div className="col-12 col-md-2 col-xl-5">
                <div className="counter">
                  <h3>
                    {" "}Time:
                    <span>{Math.floor(time / 10)}</span>
                  </h3>
                </div>

                <MainBtn classProp="button start-btn" clickProp={this.handleStart}>
                  Start game
                </MainBtn>

                <div className="points">
                  <h3>
                    Points:
                    <span>{points}</span>
                  </h3>
                </div>
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
