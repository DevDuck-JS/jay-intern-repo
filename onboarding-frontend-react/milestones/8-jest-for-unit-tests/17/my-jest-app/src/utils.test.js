// src/utils.test.js
import { add } from "./utils";

test("adds two numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
});

test("adds negative numbers", () => {
  expect(add(-2, -3)).toBe(-5);
});
