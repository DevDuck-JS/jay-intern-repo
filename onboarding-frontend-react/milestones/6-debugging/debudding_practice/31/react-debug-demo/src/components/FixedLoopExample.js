// src/components/FixedLoopExample.js
import React, { useState, useEffect } from "react";

const FixedLoopExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted or count updated:", count);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default FixedLoopExample;
