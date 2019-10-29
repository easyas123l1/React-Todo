import React, { Component }  from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import TodoSearch from './components/TodoComponents/TodoSearch';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: [],
      search: ''
    };
  }

  addTodo = item => {
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false,
      show: true
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

  handleChanges = (e) => {
    this.setState({ search: e.target.value })
    this.toggleShow(e.target.value);
  }

  toggleShow = (e) => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (!item.name.includes(e)) {
          return {
            ...item,
            show: false
          }
        } else {
          return {
            ...item, 
            show: true
          }
        }
      })
    })
  }

  filterCompleted = () => {
    this.setState({
      todo: this.state.todo.filter(item =>  !item.completed)
    })
  }
  render() {
    return (
      <div className='big'>
        <h2 className='h2'>Welcome to your Todo App!</h2>
        <p className='completed'>If word is like this its selected to be cleared from list!</p>
        <TodoForm  addTodo={this.addTodo} filterCompleted={this.filterCompleted}/>
        <TodoList toggleCompleted={this.toggleCompleted} todo={this.state.todo}/>
        <TodoSearch search={this.state.search} handleChanges={this.handleChanges} />
      </div>
    );
  }
}

export default App;
