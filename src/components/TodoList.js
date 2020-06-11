// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Todo from './Todo'
const TodoList = props => {

    return (
        <div className='big-grocery-list'>
        <div className='grocery-list'>
            {props.todos.map(todo => (
                <Todo todo={todo} toggleTodo={props.toggleTodo}></Todo>
            ))}
            </div>
            {/* <div className='button-style'> */}
            <button className='clear-todo' onClick={() => props.clearTodos(props.todo)}>Clear list</button>
            {/* </div> */}
        
        </div>
    )
}
export default TodoList