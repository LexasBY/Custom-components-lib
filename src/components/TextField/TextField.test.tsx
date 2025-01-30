import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import TextField from "./TextField";

test("renders text field with label", () => {
  render(<TextField label="Name" />);
  expect(screen.getByLabelText("Name")).toBeInTheDocument();
});

test("displays placeholder", () => {
  render(<TextField placeholder="Enter text" />);
  expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
});

test("shows error message and applies error class", () => {
  render(<TextField label="Email" error helperText="Invalid email" />);
  expect(screen.getByText("Invalid email")).toBeInTheDocument();

  const input = screen.getByLabelText("Email");
  expect(input).toHaveAttribute("aria-invalid", "true");
});

test("changes value on input", async () => {
  const user = userEvent.setup();
  render(<TextField label="Name" />);

  const input = screen.getByLabelText("Name");
  await user.type(input, "Alex");

  expect(input).toHaveValue("Alex");
});
