import React  from 'react';

const TodoSearch = props => {
  return (
    <div className='search'>
      <label>Search:
      <input type='text' name='search' placeholder='Search' value={props.search} onChange={props.handleChanges} />
      </label>
    </div>
  )
}

export default TodoSearch;