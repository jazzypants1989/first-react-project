import React, { useState, useRef, useEffect} from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4} from 'uuid'

const dingdongsong = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const nameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(dingdongsong))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(dingdongsong, JSON.stringify(todos))
  }, [todos])

  function checkToDo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function doAddTodo(e) {
    let name = nameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    nameRef.current.value = null
  }

  return (
    <>
    <TodoList todos={todos} checkToDo={checkToDo}/>
    <input ref={nameRef} type="text" />
    <button onClick={doAddTodo}>Add Todo</button>
    <button>Clear Complete</button>
    <div>0 left to do</div>
    </>
  )
}

export default App;
