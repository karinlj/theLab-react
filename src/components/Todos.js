import React from 'react'

const Todos = ({ todosprops, deleteTodo }) => { //UI component, accepting the props

    //iternary op - true if we have todo's
    const todoList = todosprops.length ? (
        //if todo's
        todosprops.map(todo => {
            //fire a function on todo
            return (
                <div className="collection-item" key={todo.id}>
                    {/* preventing auto invoking because parentesis */}
                    <span>{todo.content}</span>
                    <button className="deleteBtn" onClick={() => { deleteTodo(todo.id) }}>Delete</button>
                </div>
            )
        })
    ) : (
            //if no todo's
            <p className="center">You have no todos left, Yay!!</p >
        )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}
export default Todos