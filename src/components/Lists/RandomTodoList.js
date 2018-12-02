import TodoList from "./TodoList";

class RandomTodoList extends TodoList {

  addTodo = todo => {
    //pass in state from AddTodo  (content)!!!!
    alert("bananer i pyamas");
    //generate random id for todo
    todo.id = Math.random();
    //new array with spread op, passing in the old one, and ADDING one item
    let todosNew = [...this.state.todos, todo]; //lägga till
    this.setState({
      todos: todosNew //key and new value
    });
  };

}

export default RandomTodoList; 