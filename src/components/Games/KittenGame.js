import React, { Component } from "react";
import Sidebar from "../Sidebar";
import HeaderText from "../HeaderText";
import "./Games.scss";
import MainBtn from "../MainBtn";

//import VideoSidebar from "../Video/VideoSidebar";

class KittenGame extends Component {
  state = {
    randHeight: "20px",
    randWidth: "20px"
  };

  randomPos = () => {
    const height = "400";
    const width = "400";
    let randHeight = Math.floor(Math.random() * height) + "px";
    let randWidth = Math.floor(Math.random() * width) + "px";

    //console.log("randHeight", randHeight);
    //console.log("randWidth", randWidth);

    this.setState({
      randHeight,
      randWidth
    });
  };
  render() {
    const { randHeight, randWidth } = this.state;
    console.log("randHeight", randHeight);
    console.log("randWidth", randWidth);

    // style={{ cursor: "pointer" }}
    return (
      <div className="row justify-content-between">
        <div className="col-12 col-md-6">
          <div className="game-section">
            <header>
              <HeaderText componentName={this.constructor.name} />
            </header>

            <div className="game-square">
              <span className="item" style={{ top: randHeight, left: randWidth }}>
                x
              </span>
            </div>

            <MainBtn classProp="button start-btn" clickProp={this.randomPos}>
              New pos
            </MainBtn>
          </div>
        </div>

        <div className="col-12 col-md-5">
          <Sidebar componentName={this.constructor.name} />
        </div>
      </div>
    );
  }
}

export default KittenGame;
