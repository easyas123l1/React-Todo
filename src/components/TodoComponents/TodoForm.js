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
    console.log('submit working!');

    //call function from props here

    this.setState({ item: '' })
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
      </form>
    )
  }
}

export default TodoForm;