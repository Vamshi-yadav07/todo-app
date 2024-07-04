import React, { useState, useEffect } from "react";

import TodoForm from "./Components/TodoForm/TodoForm.js";
import TodoList1 from "./Components/TodoList/TodoList1.js";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  // Load todos from localStorage when the component mounts
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Save todos to localStorage whenever the todos state changes
  const saveTodosToLocalStorage = (event) => {
    event.preventDefault();
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todos-bg-container">
      <h1 className="todos-heading">Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList1
        todos={todos}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
      />
      <button className="button" onClick={saveTodosToLocalStorage}>
        save
      </button>
    </div>
  );
};

export default App;
