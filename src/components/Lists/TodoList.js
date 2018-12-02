import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import Sidebar from "../Sidebar";
import "./Lists.scss";
import HeaderText from "../HeaderText";

class TodoList extends Component {
  state = {
    todos: [
      { id: 1, content: "Buy some milk" },
      { id: 2, content: "Cuddle with cats" }
    ]
  };
  deleteTodo = id => {
    //func has to be here to interact with the state
    //getting ID from todos.js, putting it in as argument
    //console.log(id);

    //new array in variable and that filters out todo
    const todosNew = this.state.todos.filter(todo => {
      return todo.id !== id;
      //satisfying the return statement = returning true
      //that is if the id:s are not the same - keeping the item
    });
    this.setState({
      todos: todosNew
    });
  };

  //func has to be here to interact with the state
  addTodo = todo => {
    //pass in state from AddTodo  (content)!!!!

    //generate random id for todo
    todo.id = Math.random();
    //new array with spread op, passing in the old one, and ADDING one item
    let todosNew = [...this.state.todos, todo]; //lägga till
    this.setState({
      todos: todosNew //key and new value
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
        </div>
      </div>
    );
  }
}

export default TodoList;
