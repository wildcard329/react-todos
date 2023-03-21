import React from 'react'
import './App.css'
import { TodoProvider } from './contexts/todoContext';
import TodoForm from './components/todo-form/TodoForm';
import Todos from './components/todos/Todos';

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <TodoForm />
        <Todos />
      </TodoProvider>
    </div>
  )
}

export default App
