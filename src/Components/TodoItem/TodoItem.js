import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { IoIosSave } from "react-icons/io";
import "./index.css";

const TodoItem = ({ todo, updateTodo, deleteTodo, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <div className="label-container">
        {isEditing ? (
          <input
            type="text"
            value={newText}
            className="='edit-input"
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          <span
            className="checkbox-label"
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>
        )}
        {isEditing ? (
          <button className="button2" onClick={handleSave}>
            <IoIosSave size={15} className="save-button"/>
          </button>
        ) : (
          <button className="button2" onClick={handleEdit}>
            <CiEdit size={18} className="edit-button" />
          </button>
        )}
        <button className=" button2" onClick={() => deleteTodo(todo.id)}>
          <RiDeleteBin6Line size={15} className="delete-button" />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
