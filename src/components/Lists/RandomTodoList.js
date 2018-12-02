import TodoList from "./TodoList";

class RandomTodoList extends TodoList {
  addTodo = todo => {
    todo.id = Math.random();
    //new array with spread op, passing in the old one
    let todosNew = [...this.state.todos];

    let randomIndex = Math.floor(Math.random() * todosNew.length);
    //alert(randomIndex);
    //add todo at random index
    todosNew.splice(randomIndex, 0, todo);
    this.setState({
      todos: todosNew
    });
  };
}

export default RandomTodoList;
