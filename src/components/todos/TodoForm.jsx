import React, { useContext } from 'react';
import todoContext from '../../utils/contexts/todoContext';
import { AppForm } from '../common/templates';
import TODO_OPTIONS from '../../assets/configs/todoFormOptions.json';
import "./TodoForm.css";

const TodoForm = () => {
  const { addTodo, todo, setTodo, updateTodo, resetTodo } = useContext(todoContext);

  const handleChange = e => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleSubmit =  e => {
    e.preventDefault();
    if (todo?.id) {
      updateTodo(todo);
    } else {
      addTodo({ id: Date.now(), completed: false, ...todo });
    };
    resetTodo();
  };

  const todoOptions = TODO_OPTIONS.map((option) => ({ ...option, value: todo[option.name], handleChangeCb: handleChange }))

  return <AppForm handleSubmitCb={handleSubmit} formClass='row' inputOptions={todoOptions} />
}

export default TodoForm;
