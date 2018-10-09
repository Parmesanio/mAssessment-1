import React from 'react';

const TodoSearch = (props) => {
    let { title, handleChange, handleAddTodo } = props;
    
    return ( 
        <div className="todoSearch">
            <input name="title" type="text" value={title} onChange={(event) => handleChange(event)} />
            <button onClick={() => handleAddTodo()}>Add new to-do</button>
        </div>
     );
}
 
export default TodoSearch;