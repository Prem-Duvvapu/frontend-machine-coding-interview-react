import React, { useState } from 'react';
import './styles.css';

function TodoList() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleAddClick = () => {
    if (input.trim() === "")
      return;
      
    const newItem = {
      id: new Date().toString(),
      value: input,
      isDone: false,
    }

    setItems([...items, newItem]);
    setInput("");
  }

  const handleDeleteClick = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  }

  const handleCheckBoxChange = (itemId) => {
    const updatedItems = items.map((item) => (item.id === itemId) ? { ...item, isDone: !item.isDone } : item);
    setItems(updatedItems);
  }

  return (
    <div className="TodoList">
      <h1>Todo List</h1>
      <div className="input">
        <input
          type="text"
          placeholder="Enter todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleAddClick}
        >
        Add
          </button>
        </div>
      <div>
        <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.isDone}
              onChange={() => handleCheckBoxChange(item.id)}
            />
            <span
              className="item-content"
              style={{ textDecoration: item.isDone ? "line-through" : "none" }}>
              {item.value}
            </span>
            <span className="delete-btn">
              <button
                onClick={() => handleDeleteClick(item.id)}
              >
                Delete
                </button>
            </span>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;