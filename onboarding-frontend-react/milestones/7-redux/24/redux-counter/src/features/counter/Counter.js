// src/features/counter/Counter.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, selectCounterValue } from "./counterSlice";

const Counter = () => {
  const count = useSelector(selectCounterValue);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <p>
        {count === 0 && "Let's start!"}
        {count > 0 && count < 5 && "Keep going!"}
        {count >= 5 && "Great job!"}
      </p>
    </div>
  );
};

export default Counter;
