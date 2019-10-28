import React, { Component } from 'react';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      item: ''
    }
  }

  handleChanges = e => {
    this.setState({ item: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    //call function from props here
    this.props.addTodo(this.state.item);
    this.setState({ item: '' })
  }

  clearSelected = e => {
    e.preventDefault();
    console.log('Clear selected');
    this.props.filterCompleted();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="item">New Todo:</label>
        <input type='text'
        name='item'
        value={this.state.item}
        onChange={this.handleChanges}
        />
        <button>Add</button>
        <button onClick={this.clearSelected}>Clear Completed</button>
      </form>
    )
  }
}

export default TodoForm;