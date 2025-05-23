// src/components/Button.js
import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 active:bg-blue-700 transition-colors"
    >
      {children}
    </button>
  );
};

export default Button;
