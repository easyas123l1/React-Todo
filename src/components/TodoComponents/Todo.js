import React from 'react';

const Todo = props => {
  console.log(props);
  return (
    // {props.todo.show }
    <div className={`todo${props.todo.completed ? " completed" : ""}`} onClick={() => props.toggleCompleted(props.todo.id)}>
      <p className='h2'>{props.todo.name}</p>
    </div>
  )
}

export default Todo;