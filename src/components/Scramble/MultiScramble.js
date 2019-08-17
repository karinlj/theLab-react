import React, { Component } from "react";
import Sidebar from "../Sidebar";
import MainBtn from "../MainBtn";
import "./Scramble.scss";
import HeaderText from "../HeaderText";
import Message from "../Message";
import VideoSidebar from "../Video/VideoSidebar";

class MultiScramble extends Component {
  state = {
    contentAdd: "Add",
    contentDelete: "Delete",
    message: ""
    //  messageClass: 'message',
  };

  handleChangeAdd = e => {
    //e = here: the input element
    this.setState({
      contentAdd: e.target.value //value= what user types in
    });
  };

  handleSubmitAdd = e => {
    e.preventDefault();
    //console.log(this.state);
  };

  handleChangeDelete = e => {
    this.setState({
      //value= what user types in
      contentDelete: e.target.value
    });
  };
  handleSubmitDelete = e => {
    e.preventDefault();
    //console.log(this.state);
  };

  printAnimalAdd = animal => {
    let messageAdd;
    if (animal === "kangaroo") {
      messageAdd = "Kangaroo added";
    } else if (animal === "koala") {
      messageAdd = "Koala added";
    } else if (animal === "dolphin") {
      messageAdd = "Dolphin added";
    }

    this.setState({
      //  messageClass: 'message show',
      message: messageAdd
    });
  };

  printAnimalDelete = animal => {
    let messageDelete;
    if (animal === "kangaroo") {
      messageDelete = "Kangaroo deleted";
    } else if (animal === "koala") {
      messageDelete = "Koala deleted";
    } else if (animal === "dolphin") {
      messageDelete = "Dolphin deleted";
    }

    this.setState({
      // messageClass: 'message show',
      message: messageDelete
    });
  };

  clearMessage = () => {
    this.setState({
      message: ""
      //  messageClass: 'message',
    });
  };

  render() {
    return (
      <div className="row justify-content-between">
        <div className="col-12 col-md-6">
          <div className="scrambleMulti-section">
            <header>
              <HeaderText componentName={this.constructor.name} />
            </header>

            <form className="todo-form" onSubmit={this.handleSubmitAdd}>
              <label htmlFor="">Change wording for Add:</label>
              <br />

              <input
                type="text"
                onChange={this.handleChangeAdd}
                value={this.state.contentAdd}
                onClick={this.clearMessage}
              />
            </form>

            <form className="todo-form" onSubmit={this.handleSubmit}>
              <label htmlFor="">Change wording for Delete:</label>
              <br />

              <input
                type="text"
                onChange={this.handleChangeDelete}
                value={this.state.contentDelete}
                onClick={this.clearMessage}
              />
            </form>

            <div className="scrambleMultiBtns">
              <div className="row justify-content-between">
                <div className="col-6">
                  <MainBtn
                    classProp="button orange-btn"
                    clickProp={this.printAnimalAdd.bind(this, "kangaroo")}
                  >
                    {this.state.contentAdd} Kangaroo
                  </MainBtn>

                  <MainBtn
                    classProp="button green-btn"
                    clickProp={this.printAnimalAdd.bind(this, "koala")}
                  >
                    {this.state.contentAdd} Koala
                  </MainBtn>

                  <MainBtn
                    classProp="button red-btn"
                    clickProp={this.printAnimalAdd.bind(this, "dolphin")}
                  >
                    {this.state.contentAdd} Dolphin
                  </MainBtn>
                </div>

                <div className="col-6">
                  <MainBtn
                    classProp="button orange-btn"
                    clickProp={this.printAnimalDelete.bind(this, "kangaroo")}
                  >
                    {this.state.contentDelete} Kangaroo
                  </MainBtn>

                  <MainBtn
                    classProp="button green-btn"
                    clickProp={this.printAnimalDelete.bind(this, "koala")}
                  >
                    {this.state.contentDelete} Koala
                  </MainBtn>

                  <MainBtn
                    classProp="button red-btn"
                    clickProp={this.printAnimalDelete.bind(this, "dolphin")}
                  >
                    {this.state.contentDelete} Dolphin
                  </MainBtn>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <Message>
                  {this.state.message}
                </Message>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-5">
          <Sidebar componentName={this.constructor.name} />

          <VideoSidebar
            src="https://www.youtube.com/embed/Wkterst3HPo"
            height="230"
            width="100%"
            title="getting-started"
          />
        </div>
      </div>
    );
  }
}
export default MultiScramble;
