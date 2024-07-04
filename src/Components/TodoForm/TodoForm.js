import React, { useState } from "react";
import "./index.css";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') {
      alert('Add task to do');
      return;
    }
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="create-task-heading">
        Create <span className="create-task-heading-subpart">Task</span>
      </h1>
      <input
        className="todo-user-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
      />
      <br />
      <button className="button" type="submit">
        Add
      </button>
      <h1 className="todo-items-heading">
        My <span className="todo-items-heading-subpart">Tasks</span>
      </h1>
    </form>
  );
};

export default TodoForm;
