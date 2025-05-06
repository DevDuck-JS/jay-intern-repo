// File: UseCallbackDemo.js
import React, { useState, useCallback } from "react";
import ChildComponent from "./ChildComponent";

const UseCallbackDemo = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []); // No dependency -> function is memoized once

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default UseCallbackDemo;
