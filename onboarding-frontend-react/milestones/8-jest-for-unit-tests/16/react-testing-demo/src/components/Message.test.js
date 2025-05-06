// src/components/Message.test.js
import { render, screen } from "@testing-library/react";
import Message from "./Message";

test("renders the message correctly", () => {
  render(<Message text="Hello, Focus Bear!" />);
  expect(screen.getByText("Hello, Focus Bear!")).toBeInTheDocument();
});
