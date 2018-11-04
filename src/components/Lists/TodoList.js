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
                            <p>Praesent id velit volutpat, finibus mi eleifend, molestie enim. Sed non massa nec lectus feugiat sollicitudin ut et nunc. Ut ac felis tellus.</p>
                        </header>
                        {/* nesting component, passing todos-array and delete-func */}
                        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
                        <AddTodo addTodo={this.addTodo} />{/* defining prop: addTodo that refers to the func:addTodo */}
                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <Sidebar heading="Hello Todo list" text="Ut eros justo, fringilla vulputate ultricies vel, volutpat in nisi. Mauris vitae mauris tortor. Nam vehicula rhoncus erat eget bibendum." />

                </div>

            </div>
        );
    }
}

export default TodoList
