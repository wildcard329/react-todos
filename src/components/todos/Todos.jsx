import React, { useContext } from "react";
import todoContext from "../../contexts/todoContext";
import { BsFillCheckSquareFill } from 'react-icons/bs';
import { RiChatDeleteFill } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import "./Todo.css";

const Todos = () => {
  const { todos, completeTodo, removeTodo, clearCompleted, editTodo } = useContext(todoContext);
  return(
    <div>
      <ul className="todos-container">
        {todos.map((todo) => 
          <li key={todo.id} className={`todo ${todo.completed ? 'completed' : ''}`}>
            <div className="todo-buttons">
              <BsFillCheckSquareFill onClick={() => completeTodo(todo.id)} />
              <FaEdit onClick={() => editTodo(todo.id)} />
              <RiChatDeleteFill onClick={() => removeTodo(todo.id)} />
            </div>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </li>)}
      </ul>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  )
}

export default Todos;
