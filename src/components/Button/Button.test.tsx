import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

test("renders button with text", () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText("Click me")).toBeInTheDocument();
});

test("calls onClick when clicked", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);

  fireEvent.click(screen.getByText("Click me"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("disabled button does not trigger onClick", () => {
  const handleClick = jest.fn();
  render(
    <Button onClick={handleClick} disabled>
      Click me
    </Button>,
  );

  fireEvent.click(screen.getByText("Click me"));
  expect(handleClick).not.toHaveBeenCalled();
});
