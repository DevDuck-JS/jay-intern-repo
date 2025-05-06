import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold mb-4">Count: {count}</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 mx-2 rounded"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 mx-2 rounded"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
