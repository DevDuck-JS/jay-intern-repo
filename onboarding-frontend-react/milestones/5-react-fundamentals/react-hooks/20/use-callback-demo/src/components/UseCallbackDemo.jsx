import React, { useState, useCallback } from "react";
import ChildComponent from "./ChildComponent";

const UseCallbackDemo = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div className="p-8 text-center">
      <h1 className="text-xl font-bold mb-4">Count: {count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-4"
      >
        Increment
      </button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default UseCallbackDemo;
