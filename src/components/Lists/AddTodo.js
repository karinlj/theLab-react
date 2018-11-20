import React, { Component } from 'react'
import './Lists.scss';

//we need local state in the component to store what the user types in,
//so class based component
class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({     //value= what user types in
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);

        if (this.state.content) { //if has content   // alert(this.state.content);

            //calling the AddTodo-func from TodoList, pass in this.state from THIS component!!!!!
            this.props.addTodoProp(this.state);

            this.setState({ //clear form
                content: ''
            })
        }
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
