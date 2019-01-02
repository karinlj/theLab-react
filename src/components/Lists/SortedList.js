import React, { Component } from "react";
import Items from "./Items";
import AddItem from "./AddItem";
import Sidebar from "../Sidebar";
import "./Lists.scss";
import HeaderText from "../HeaderText";
import VideoSidebar from "../Video/VideoSidebar";

class SortedList extends Component {
  state = {
    todos: [{ id: 1, content: "Buy some milk" }, { id: 2, content: "Cuddle with cats" }],
    newContent: ""
  };

  handleChange = e => {
    //value= what user types in
    this.setState({
      newContent: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { newContent } = this.state;

    if (newContent) {
      // console.log("state.newContent", newContent)
      let tmpItem = { id: Math.random(), content: newContent };

      //new array with spread op, passing in the old one, and adding one item
      let todos = [...this.state.todos, tmpItem];
      this.setState({
        todos,
        newContent: ""
      });
    }
  };

  handleDelete = id => {
    //  console.log("delete todo", id);
    //new array - keeping the all items that fulfill the condition
    const todos = this.state.todos.filter(t => t.id !== id);
    this.setState({
      todos
    });
  };

  render() {
    const { todos, newContent } = this.state;

    return (
      <div className="row justify-content-between">
        <div className="col-12 col-md-6">
          <div className="todo-section">
            <header>
              <HeaderText componentName={this.constructor.name} />
            </header>
            <Items items={todos} onDelete={this.handleDelete} />

            <AddItem
              inputContent={newContent}
              onInputChange={this.handleChange}
              onFormSubmit={this.handleSubmit}
            />
          </div>
        </div>

        <div className="col-12 col-md-5">
          <Sidebar componentName={this.constructor.name} />
          <VideoSidebar
            src="https://www.youtube.com/embed/fH7rkRBgNzE"
            height="230"
            width="100%"
            title="getting-started"
          />
          <VideoSidebar
            src="https://www.youtube.com/embed/2xnX_9s2zWE"
            height="230"
            width="100%"
            title="getting-started"
          />
        </div>
      </div>
    );
  }
}
export default SortedList;
