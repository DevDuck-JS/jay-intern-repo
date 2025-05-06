import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import User from "./User";

jest.mock("axios");

test("displays user name after API call", async () => {
  axios.get.mockResolvedValue({ data: { name: "Focus Bear" } });

  render(<User />);
  expect(screen.getByText("Loading...")).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText("Hello, Focus Bear")).toBeInTheDocument();
  });
});
