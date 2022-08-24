import React from 'react'

export default function Todo( {todo, checkToDo } ) {
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange = {handleTodoclick} />
                {todo.name}
            </label>
        </div>
    )
}