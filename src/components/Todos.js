import React from 'react'

//only listing single todos here
const Todos = props => {  //Stateless UI component
    //passing states from TodoList.js = passing todos-array via props

    //iternary op - true if we have todo's
    const todoList = props.todos.length ? (
        //if we have todo's - map through todos
        props.todos.map(todo => {
            //fire a function on todo
            return (   //draw single todo
                <div className="collection-item" key={todo.id}>
                    {/* preventing auto invoking because parentesis */}
                    <span>{todo.content}</span>

                    {/* calling deleteTodo-func (located in App.js), draw the button */}
                    <button className="deleteBtn" onClick={() => { props.deleteTodo(todo.id) }}>Delete</button>
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