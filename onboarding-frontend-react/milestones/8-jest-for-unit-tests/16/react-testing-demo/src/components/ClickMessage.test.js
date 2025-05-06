// src/components/ClickMessage.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import ClickMessage from "./ClickMessage";

test("displays message after button click", () => {
  render(<ClickMessage />);
  fireEvent.click(screen.getByText("Click me"));
  expect(screen.getByText("Clicked!")).toBeInTheDocument();
});
