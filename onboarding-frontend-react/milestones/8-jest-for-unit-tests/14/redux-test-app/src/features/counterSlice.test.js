// src/features/counterSlice.test.js
import counterReducer, { increment, incrementByAmount } from "./counterSlice";

describe("counter reducer", () => {
  it("should handle initial state", () => {
    expect(counterReducer(undefined, {})).toEqual({ value: 0 });
  });

  it("should handle increment", () => {
    const prev = { value: 0 };
    expect(counterReducer(prev, increment())).toEqual({ value: 1 });
  });

  it("should handle incrementByAmount", () => {
    const prev = { value: 5 };
    expect(counterReducer(prev, incrementByAmount(3))).toEqual({ value: 8 });
  });
});
