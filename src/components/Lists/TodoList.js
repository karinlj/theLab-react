import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'
import Sidebar from '../Sidebar';
import './Lists.scss';

class TodoList extends Component { //class based component
    state = {
        todos: [
            { id: 1, content: 'Buy some milk' },
            { id: 2, content: 'Cuddle with cats' }
        ]
    }
    deleteTodo = (id) => { //has to be here to interact with the state
        //console.log(id);
        //new copy of array:todos stored in variable
        //filter method with passed back function with todo as parameter

        const todos = this.state.todos.filter(todo => {  //ta bort
            //return true (if not equal)if keeping the item, false if removing
            return todo.id !== id
        });
        this.setState({
            todos: todos
        })
    }
    addTodo = (todo) => { //func has to be here to interact with the state
        //generate random id
        todo.id = Math.random();
        //new array with spread op
        let todos = [...this.state.todos, todo]; //lägga till
        this.setState({
            todos: todos //key and value
        })
    }
    render() {
        return (
            <div className="row justify-content-between">
                <div className="col-12 col-md-6">
                    <div className="todo-section">

                        <header>
                            <h1 className="">Todo's</h1>
                            <p>In this simple appliation we can add and delete todos from a list. </p>
                            <p>There are several small tests we can do on top of this application, and they illustrate element selection and data handling. </p>
                            <p>In order to cover most cases, we should add a list of items to the todo-list,
                            randomize the list order and then remove the list of items again. </p>

                        </header>
                        {/* nesting component, passing todos-array and delete-func */}
                        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
                        <AddTodo addTodo={this.addTodo} />{/* defining prop: addTodo that refers to the func:addTodo */}
                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <Sidebar heading="Why Learn: Todo List?" text="In many SaaS applications, data lists of different kinds are often used. One problem in automation using CSS selectors, is to be able to add and remove an item to a list without risking to remove the wrong item." />

                </div>

            </div>
        );
    }
}

export default TodoList
