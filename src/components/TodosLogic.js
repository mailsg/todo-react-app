import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import TodosList from './TodoList';
import InputTodo from './InputTodo';

const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'Setup dvelopment environment',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Deploy to live server',
      completed: true,
    },
  ]);
  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          Completed: !todo.completed,
        };
      }
      return todo;
    }));
  };
  const addTodoItem = (title) => {
    const neTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, neTodo]);
  };
  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };
  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          // eslint-disable-next-line no-param-reassign
          todo.title = updatedTitle;
        }
        return todo;
      }),
    );
  };
  return (

    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <TodosList
        todos={todos}
        setTodos={setTodos}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    </div>

  );
};
export default TodosLogic;
