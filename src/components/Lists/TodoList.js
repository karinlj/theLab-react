import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'
import Sidebar from '../Sidebar';
import './Lists.scss';
import ContentData from '../../data/pageContent.json';  //the name ContentData is made up


class TodoList extends Component { //class based component
    state = {
        todos: [
            { id: 1, content: 'Buy some milk' },
            { id: 2, content: 'Cuddle with cats' }
        ]
    }
    deleteTodo = (id) => { //has to be here to interact with the state
        //getting ID from todos.js, putting it in as argument
        //console.log(id);

        //new array in variable and that filters out todo for not changing array destructively
        //only filter out
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
            //satisfying the return statement = returning true
            //that is if the id:s are not the same - keeping the item
        });
        this.setState({
            todos: todos
        })
    }
    addTodo = (todo) => { //func has to be here to interact with the state
        //generate random id for todo
        todo.id = Math.random();
        //new array with spread op
        let todos = [...this.state.todos, todo]; //lägga till
        this.setState({
            todos: todos //key and value
        })
    }
    render() {
        const pageHeading = ContentData.todoList.heading;
        const pageText = ContentData.todoList.text;

        return (
            <div className="row justify-content-between">
                <div className="col-12 col-md-6">
                    <div className="todo-section">

                        <header>
                            <h1>{pageHeading}</h1>
                            <p>{pageText.split('\n').map((item, key) => {
  return <span key={key}>{item}<br/></span>
})}</p>

                        </header>
                        {/* nesting component, passing todos-array, add-func and delete-func */}
                        {/* props defined here */}
                        <Todos todosProp={this.state.todos} deleteTodoProp={this.deleteTodo} />
                        <AddTodo addTodoProp={this.addTodo} />{/* defining prop: addTodo that refers to the func:addTodo */}
                    </div>
                </div>

                <div className="col-12 col-md-5">
                    <Sidebar heading="Why Learn: Todo List?" text="In many SaaS applications, data lists of different kinds are often used. One problem in automation using CSS selectors, is to be able to add and remove an item to a list without risking to remove the wrong item." />

                </div>

            </div>
        );
    }
}

export default TodoList
