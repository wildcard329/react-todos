import { createContext, useState } from "react";

const todoContext = createContext(null);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const [todo, setTodo] = useState({
    title: '',
    description: ''
  });

  const addTodo = (todo) => setTodos([ ...todos, todo ]);
  
  const removeTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const completeTodo = async (id) => setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo ));

  const clearCompleted = () => setTodos(todos.filter((todo) => todo.completed === false));

  const updateTodo = (todo) => setTodos(todos.map((todoItem) => todoItem.id === todo.id ? todo : todoItem));

  const editTodo = (id) => setTodo(todos.find((todo) => todo.id === id));

  return(
    <todoContext.Provider value={{ todos, addTodo, removeTodo, clearCompleted, completeTodo, updateTodo, editTodo, todo, setTodo }}>
      {children}
    </todoContext.Provider>
  )
}

export default todoContext;
