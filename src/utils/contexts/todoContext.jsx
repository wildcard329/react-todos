import { createContext, useState } from "react";
import TODOJSON from '../../assets/configs/todos.json';
import useArray from "../custom-hooks/useArray";

const todoContext = createContext(null);

export const TodoProvider = ({ children }) => {
  const { arr: todos, addArrItem, removeArrItem, removeArrItems, updateArrItem, findArrItem } = useArray(TODOJSON);
  // const [todos, setTodos] = useState(TODOJSON);
  const initTodo = { title: '', description: '', completed: false };

  const [todo, setTodo] = useState(initTodo);

  const resetTodo = () => setTodo(initTodo);

  const addTodo = (todo) => addArrItem(todo);
  
  const removeTodo = (id) => removeArrItem('id', id);

  // const completeTodo = (id) => setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo ));
  const completeTodo = (id) => {
    const todo = findArrItem('id', id);
    updateArrItem({ ...todo, completed: !todo.completed }, 'id');
  };

  const clearCompleted = () => removeArrItems('completed', true);

  // const updateTodo = (todo) => setTodos(todos.map((todoItem) => todoItem.id === todo.id ? todo : todoItem));
  const updateTodo = (todo) => updateArrItem(todo, 'id');

  const editTodo = (id) => setTodo(findArrItem('id', id));

  return(
    <todoContext.Provider value={{ todos, addTodo, removeTodo, clearCompleted, completeTodo, updateTodo, editTodo, todo, setTodo, resetTodo }}>
      {children}
    </todoContext.Provider>
  )
}

export default todoContext;
