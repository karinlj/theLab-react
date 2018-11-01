import React, { Component } from 'react'

//we need local state in the component to store what the user types in,
//so class based component
class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({ //value= what user types in
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        //prevent refreshing page on submit
        e.preventDefault();
        // console.log(this.state);
        //submitting the new todo
        this.props.addTodoprops(this.state);
        this.setState({ //setting state.content= ''
            content: ''
        })
    }
    render() {
        return (
            <div>
                <form className="todo-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="">Add new Todo:</label><br></br>

                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                </form>
            </div>
        )
    }
}
export default AddTodo
