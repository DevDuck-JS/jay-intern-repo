// File: ExpensiveList.js
import React, { useState, useMemo } from "react";

const ExpensiveList = () => {
  const [count, setCount] = useState(0);
  const [listSize, setListSize] = useState(10000);

  // Expensive calculation: summing all even numbers
  const evenSum = useMemo(() => {
    console.log("Calculating sum...");
    let sum = 0;
    for (let i = 0; i < listSize; i++) {
      if (i % 2 === 0) sum += i;
    }
    return sum;
  }, [listSize]);

  return (
    <div>
      <h2>Expensive List Calculation</h2>
      <p>Even Sum: {evenSum}</p>
      <button onClick={() => setCount(count + 1)}>
        Re-render (count = {count})
      </button>
      <button onClick={() => setListSize(listSize + 1000)}>
        Increase List Size
      </button>
    </div>
  );
};

export default ExpensiveList;
