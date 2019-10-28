import React, { Component }  from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: []
    };
  }

  addTodo = item => {
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    }
    this.setState({ todo: [...this.state.todo, newItem ]})
  }

  toggleCompleted = clickedItem => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === clickedItem) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }

  filterCompleted = () => {
    this.setState({
      todo: this.state.todo.filter(item =>  !item.completed)
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} filterCompleted={this.filterCompleted}/>
        <TodoList toggleCompleted={this.toggleCompleted} todo={this.state.todo}/>
      </div>
    );
  }
}

export default App;
