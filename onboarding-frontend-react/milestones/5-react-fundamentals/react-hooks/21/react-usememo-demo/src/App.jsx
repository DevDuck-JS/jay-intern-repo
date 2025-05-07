import React, { useState, useMemo } from "react";
import "./index.css";

const ExpensiveList = () => {
  const [count, setCount] = useState(0);
  const [listSize, setListSize] = useState(10000);

  const evenSum = useMemo(() => {
    console.log("Calculating even sum...");
    let sum = 0;
    for (let i = 0; i < listSize; i++) {
      if (i % 2 === 0) sum += i;
    }
    return sum;
  }, [listSize]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4 p-6">
      <h2 className="text-2xl font-bold">Expensive List Calculation</h2>
      <p className="text-lg">Even Sum: {evenSum}</p>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => setCount(count + 1)}
      >
        Re-render (count = {count})
      </button>
      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        onClick={() => setListSize(listSize + 1000)}
      >
        Increase List Size
      </button>
    </div>
  );
};

export default ExpensiveList;
