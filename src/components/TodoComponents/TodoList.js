import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div className='todo'>
      {props.todo.map(item => (
        <Todo 
        key={item.id}
        todo={item}
        toggleCompleted={props.toggleCompleted}
        />
      ))}
    </div>
  )
}

export default TodoList;
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
