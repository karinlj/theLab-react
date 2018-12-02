import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import Sidebar from "../Sidebar";
import "./Lists.scss";
import HeaderText from "../HeaderText";
import TodoList from "./TodoList";

class RandomTodoList extends TodoList {
  addTodo = todo => {
    //pass in state from AddTodo  (content)!!!!
    //generate random id for todo
    todo.id = Math.random();
    //new array with spread op, passing in the old one, and ADDING one item
    let todosNew = [...this.state.todos];

    let randomIndex = Math.floor(Math.random() * 5);
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
              {/* to get name of component */}
              <HeaderText componentName={this.constructor.name} />
              {/*    <HeaderText componentName="todoList" /> */}
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
        </div>
      </div>
    );
  }
}

export default RandomTodoList;
