// src/components/InfiniteLoopExample.js
import React, { useState, useEffect } from "react";

const InfiniteLoopExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Updating count...");
    setCount(count + 1);
  }, [count]);

  return <h1>{count}</h1>;
};

export default InfiniteLoopExample;
