import React from 'react'
import './App.css'
import { TodoProvider } from './utils/contexts/todoContext';
import { TodoForm, Todos } from './components/todos';

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
