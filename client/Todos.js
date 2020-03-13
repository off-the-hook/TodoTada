import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './Todo';
import CreateTodo from './CreateTodo';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/todos');
      setTodos(data);
    })();
  });

  // useEffect(() => {
  //   async function fetchData() {
  //     const { data } = await axios.get('/api/todos');
  //     setTodos(data);
  //   }
  //   fetchData();
  // }, []);

  return (
    <div id="todos">
      <CreateTodo />
      {todos.map(todo => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default Todos;
