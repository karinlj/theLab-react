import React from 'react';
import './Lists.scss';

//only listing single todos here
const Todos = props => {         //destructuring: ({ todosProp, deleteTodoProp})  //passing state from TodoList via prop

    //ternary op - true if we have todo's
    const todoList = props.todosProp.length ? (  //state from TodoList!!!!!!

        //if we have todo's (from todoList) - map through todos
        props.todosProp.map(todo => {    //fire a function on todo

            return (   // single todo
                <div className="collection-item" key={todo.id}> {/* adding id */}

                    {/* prop: content from state.todos in TodoList */}
                    <span>{todo.content}</span>

                    {/* Getting prop from TodoList.js that takes ID as argument (from here)
                    Click on btn calls func in TodoList.js */}
                    {/* preventing auto invoking because parenthesis */}

                    <button className="deleteBtn" onClick={() => { props.deleteTodoProp(todo.id) }}>Delete</button>
                </div>
            )
        })
    ) : (
            //if no todo's
            <p className="center">You have no todos left, Yay!!</p>
        )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}
export default Todos