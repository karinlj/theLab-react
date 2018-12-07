import TodoList from "./TodoList";
import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import Sidebar from "../Sidebar";
import "./Lists.scss";
import HeaderText from "../HeaderText";
import VideoSidebar from "../Video/VideoSidebar";

class RandomTodoList extends TodoList {
  addTodo = todo => {
    todo.id = Math.random();
    //new array with spread op, passing in the old one
    let todosNew = [...this.state.todos];

    let randomIndex = Math.floor(Math.random() * todosNew.length);
    //alert(randomIndex);
    //add todo at random index
    todosNew.splice(randomIndex, 0, todo);
    this.setState({
      todos: todosNew
    });
  };
 render() {
    return (
      <div className="row justify-content-between">
        <div className="col-12 col-md-6">
          <div className="todo-section">
            <header>
              <HeaderText componentName={this.constructor.name} />
            </header>
            {/* sending delete-func */}
            {/* sending the state of this comp. to Todos!!!!!!!! */}
            <Todos
              todosProp={this.state.todos}
              deleteTodoProp={this.deleteTodo}
            />

            {/* sending add-func to AddTodo*/}
            <AddTodo addTodoProp={this.addTodo} />
          </div>
        </div>

        <div className="col-12 col-md-5">
          <Sidebar componentName={this.constructor.name} />
     
        <VideoSidebar
          src="https://www.youtube.com/embed/uJZZucOToHk"
          height="230"
          width="100%"
          title="getting-started"
        />

        <VideoSidebar
          src="https://www.youtube.com/embed/pxibmAUP70s"
          height="230"
          width="100%"
          title="getting-started"
        />
      </div>
      </div>
    );
  }
}


export default RandomTodoList;
