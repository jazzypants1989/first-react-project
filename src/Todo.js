import React from 'react'

export default function Todo( {todo, checkToDo } ) {
function handleToDoClick() {
    checkToDo(todo.id)
}

    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleToDoClick} />
                {todo.name}
            </label>
        </div>
    )
}