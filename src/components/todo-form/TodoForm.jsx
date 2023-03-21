import React, { useState, useContext } from 'react';
import todoContext from '../../contexts/todoContext';
import "./TodoForm.css";

const TodoForm = () => {
  const { addTodo, todo, setTodo, updateTodo } = useContext(todoContext);

  const handleChange = e => {
    console.log('data ', todo);
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (todo?.id) {
      await updateTodo(todo);
    } else {
      await addTodo({ id: Date.now(), completed: false, ...todo });
    }
    setTodo({ title: '', description: '' });
  };

  return(
    <form className='todo-form' onSubmit={handleSubmit}>
      <input 
        type='text'
        name='title'
        placeholder='title'
        value={todo?.title}
        onChange={handleChange}
      />
      <input 
        type='text'
        name='description'
        placeholder='description'
        value={todo?.description}
        onChange={handleChange}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default TodoForm;
