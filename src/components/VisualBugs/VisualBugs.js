import React, { Component } from "react";
import Sidebar from "../Sidebar";
import "./VisualBugs.scss";
import HeaderText from "../HeaderText";
import MainBtn from "../MainBtn";
import AnimalData from "../../data/animalData.json";
import VideoSidebar from "../Video/VideoSidebar";

class VisualBugs extends Component {
  state = {
    index: 0
  };

  handleNext = () => {
    let { index } = this.state;
    //console.log("next ", index);

    if (index < AnimalData.length - 1) {
      this.setState({
        index: index + 1
      });
    } else {
      this.setState({
        index: 0
      });
    }
  };

  render() {
    let images = AnimalData.map(item => {
      return (
        <img
          key={item.image}
          src={require(`../../img/${item.image}.jpg`)}
          alt={item.image}
        />
      );
    });

    let { index } = this.state;
    let animalPict = images[index];
    let animalLabel = AnimalData[index].label;

    return (
      <div className="row justify-content-between">
        <div className="col-12 col-md-6">
          <div className="visual-bugs-section">
            <header>
              <HeaderText componentName={this.constructor.name} />
            </header>

            <div className="img-section">
              <div className="img-wrapper">
                {animalPict}
              </div>

              <div className="label-wrapper">
                <h5>
                  {animalLabel}
                </h5>
              </div>

              <div className="btn-wrapper">
                <MainBtn classProp="button pink-btn" clickProp={() => this.handleNext()}>
                  Next
                </MainBtn>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-5">
          <Sidebar componentName={this.constructor.name} />

          <VideoSidebar
            src="https://www.youtube.com/embed/O4bvInDRZs4"
            height="230"
            width="100%"
            title="getting-started"
          />

          <VideoSidebar
            src="https://www.youtube.com/embed/1c2fXv_fsUY"
            height="230"
            width="100%"
            title="getting-started"
          />
        </div>
      </div>
    );
  }
}

export default VisualBugs;
