import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Button from "./Button";

test("renders button with size as text", () => {
  render(<Button size="large" />);
  expect(screen.getByRole("button", { name: "LARGE" })).toBeInTheDocument();

  render(<Button size="small" />);
  expect(screen.getByRole("button", { name: "SMALL" })).toBeInTheDocument();

  render(<Button size="medium" />);
  expect(screen.getByRole("button", { name: "MEDIUM" })).toBeInTheDocument();
});

test("calls onClick when clicked", async () => {
  const user = userEvent.setup();
  const handleClick = jest.fn();

  render(<Button size="medium" onClick={handleClick} />);

  await user.click(screen.getByRole("button", { name: "MEDIUM" }));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("disabled button does not trigger onClick and has disabled attribute", async () => {
  const user = userEvent.setup();
  const handleClick = jest.fn();

  render(<Button size="medium" onClick={handleClick} disabled />);

  const button = screen.getByRole("button", { name: "MEDIUM" });
  expect(button).toBeDisabled();

  await user.click(button);
  expect(handleClick).not.toHaveBeenCalled();
});
