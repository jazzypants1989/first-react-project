import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, checkToDo }){
    return (
            todos.map(todo => {
                return <Todo key={todo.id} checkToDo={checkToDo} todo={todo} />
            })
    )
}