import React, { Component } from "react";
import Sidebar from "../Sidebar";
import Giraf from "../../img/giraf.jpg";
import Zebra from "../../img/zebra-two.jpg";
import Elephant from "../../img/elephant.jpg";
import Lion from "../../img/lion-two.jpg";
import Leopard from "../../img/leopard.jpg";
import "./VisualBugs.scss";
import HeaderText from "../HeaderText";
import MainBtn from "../MainBtn";

class VisualBugs extends Component {
  state = {
    index: 0
    //displayAnimal: "Elephant"
  };

  handleNext = () => {
    //console.log("next ", this.state.index);

    // const animals = ["elephant", "lion", "zebra", "giraf"];

    const animals = [
      { pict: "elephant", label: "elephant" },
      { pict: "lion", label: "lion" },
      { pict: "zebra", label: "zebra" },
      { pict: "giraf", label: "lion" },
      { pict: "leopard", label: "leopard" }
    ];

    if (this.state.index < animals.length - 1) {
      this.setState({
        index: this.state.index + 1
      });
    } else {
      this.setState({
        index: 0
      });
    }
  };

  render() {
    const animals = [
      { pict: "elephant", label: "elephant" },
      { pict: "lion", label: "lion" },
      { pict: "zebra", label: "zebra" },
      { pict: "giraf", label: "lion" },
      { pict: "leopard", label: "leopard" }
    ];

    let animalPict = animals[this.state.index].pict;

    let animalLabel = animals[this.state.index].label;

    /*  const animals = ["elephant", "lion", "zebra", "giraf", "leopard"];
    let animal = animals[this.state.index];

    const labels = ["elephant", "lion", "zebra", "lion", "leopard"];
    let displayLabels = labels[this.state.index];
 */
    //const imgUrls = ["Elephant", "Lion", "Zebra", "Giraf"];
    // let displayAnimal = imgUrls[this.state.index];

    //console.log(this.state.displayAnimal);
    //let { index } = this.state;

    //let displayLabels = animals.label[this.state.index];

    let displayAnimal;
    if (animalPict === "elephant") {
      displayAnimal = <img src={Elephant} alt="elephant" />;
    } else if (animalPict === "lion") {
      displayAnimal = <img src={Lion} alt="lion" />;
    } else if (animalPict === "zebra") {
      displayAnimal = <img src={Zebra} alt="zebra" />;
    } else if (animalPict === "giraf") {
      displayAnimal = <img src={Giraf} alt="giraf" />;
    } else if (animalPict === "leopard") {
      displayAnimal = <img src={Leopard} alt="leopard" />;
    }
    console.log(displayAnimal + " " + this.state.index);

    return (
      <div className="row justify-content-between">
        <div className="col-12 col-md-6">
          <div className="visual-bugs-section">
            <header>
              <HeaderText componentName={this.constructor.name} />
            </header>

            <div>
              <div className="img-wrapper">
                {/*  <img src={this.state.displayAnimal} alt="" /> */}
                {/*  <img src={Lion} alt="" /> */}

                {displayAnimal}
              </div>

              <div className="label-wrapper">
                <h5>
                  {animalLabel}
                </h5>
              </div>
            </div>

            <div className="btn-wrapper">
              <MainBtn classProp="button pink-btn" clickProp={() => this.handleNext()}>
                Next
              </MainBtn>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-5">
          <Sidebar componentName={this.constructor.name} />
        </div>
      </div>
    );
  }
}

export default VisualBugs;
