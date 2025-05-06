// src/components/TodoList.js
import React, { useState } from "react";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (inputValue.trim() === "") return;
    setItems([...items, inputValue]);
    setInputValue("");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">My Todo List</h2>
      <div className="flex gap-2 mb-4">
        <input
          className="border border-gray-300 px-3 py-1 w-full"
          type="text"
          placeholder="Enter a task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={handleAddItem}
          className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
        >
          Add
        </button>
      </div>
      <ul className="list-disc pl-6 space-y-1">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
