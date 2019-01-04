import React, { Component } from "react";
import Sidebar from "../Sidebar";
import HeaderText from "../HeaderText";
import "./Games.scss";
import MainBtn from "../MainBtn";
import CatIcon from "../../img/kitten-icon.png";
import Hedgehog from "../../img/hedgehog-icon.png";

import VideoSidebar from "../Video/VideoSidebar";

class KittenGame extends Component {
  state = {
    isRunning: false,
    time: 0,
    interval: 0,
    kittens: [],
    hedgehogs: [],
    points: 0,
    errorMessage: ""
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
    let finishTime = 150; //should be 60s*10

    this.setState({
      time: time + 1
    });

    //draw kitten every 5% of the time
    if (Math.random() < 0.05) this.drawKitten();

    //draw hedgehog every 1% of the time
    if (Math.random() < 0.01) this.drawHedgehog();

    if (time > finishTime) {
      clearInterval(interval);

      this.setState({
        time: 0,
        isRunning: false
      });
    }
  };

  randomPos = () => {
    const height = "400";
    const width = "600";

    let randHeight = Math.floor(Math.random() * (height - 48)) + "px";
    let randWidth = Math.floor(Math.random() * (width - 48)) + "px";

    return [randHeight, randWidth];
  };

  drawKitten = () => {
    let randPos = this.randomPos();
    let randHeight = randPos[0];
    let randWidth = randPos[1];

    const catIcon = <img src={CatIcon} alt="cat" />;

    let tmpKitten = { id: Math.random(), randHeight, randWidth, catIcon };

    let kittens = [...this.state.kittens, tmpKitten]; //new array, adding object to array

    this.setState({
      kittens
    });
    //hide kitten after 1s
    setTimeout(() => this.hideKitten(tmpKitten.id), 1000);
  };

  drawHedgehog = () => {
    let randPos = this.randomPos();
    let randHeight = randPos[0];
    let randWidth = randPos[1];

    const hedgehogIcon = <img src={Hedgehog} alt="hedgehog" />;

    let tmpHedgehog = { id: Math.random(), randHeight, randWidth, hedgehogIcon };

    let hedgehogs = [...this.state.hedgehogs, tmpHedgehog]; //new array, adding object to array

    this.setState({
      hedgehogs
    });
    setTimeout(() => this.hideHedgehog(tmpHedgehog.id), 1000);
  };

  hideKitten = id => {
    const kittens = this.state.kittens.filter(k => k.id !== id);
    this.setState({
      kittens
    });
  };
  hideHedgehog = id => {
    const hedgehogs = this.state.hedgehogs.filter(h => h.id !== id);
    this.setState({
      hedgehogs
    });
  };

  kittenClick = id => {
    this.hideKitten(id);
    this.setState({
      points: this.state.points + 1
    });
  };

  hedgehogClick = id => {
    // alert("dead");
    clearInterval(this.state.interval);
    this.setState({
      isRunning: false,
      time: 0
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

                  {this.state.hedgehogs.map(hedgehog =>
                    <h2
                      key={hedgehog.id}
                      className="kitten"
                      style={{ top: hedgehog.randHeight, left: hedgehog.randWidth }}
                      onClick={() => this.hedgehogClick(hedgehog.id)}
                    >
                      {hedgehog.hedgehogIcon}
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
