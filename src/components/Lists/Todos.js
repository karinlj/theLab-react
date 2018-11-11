import React from 'react';
import './Lists.scss';

//only listing single todos here
const Todos = props => {  //Stateless UI component
    //passing states from TodoList.js = passing todos-array via props

    //iternary op - true if we have todo's
    const todoList = props.todosProp.length ? (
        //if we have todo's (from todoList) - map through todos
        props.todosProp.map(todo => {
            //fire a function on todo
            return (   //draw single todo
                <div className="collection-item" key={todo.id}> {/* adding id */}
                    {/* preventing auto invoking because parentesis */}
                    <span>{todo.content}</span>

                    {/* Getting prop from TodoList.js that takes ID as argument (from here)
                    Click on btn calls func in TodoList.js */}
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