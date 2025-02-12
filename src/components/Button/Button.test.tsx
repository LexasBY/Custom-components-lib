import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Button from "./Button";

test("renders button with size as text", () => {
  render(<Button size="large">Large</Button>);
  expect(screen.getByRole("button", { name: "Large" })).toBeInTheDocument();

  render(<Button size="small">Small</Button>);
  expect(screen.getByRole("button", { name: "Small" })).toBeInTheDocument();

  render(<Button size="medium">Medium</Button>);
  expect(screen.getByRole("button", { name: "Medium" })).toBeInTheDocument();
});

test("calls onClick when clicked", async () => {
  const user = userEvent.setup();
  const handleClick = jest.fn();

  render(
    <Button size="medium" onClick={handleClick}>
      Click Me
    </Button>,
  );

  await user.click(screen.getByRole("button", { name: "Click Me" }));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("disabled button does not trigger onClick and has disabled attribute", async () => {
  const user = userEvent.setup();
  const handleClick = jest.fn();

  render(
    <Button size="medium" onClick={handleClick} disabled>
      Disabled
    </Button>,
  );

  const button = screen.getByRole("button", { name: "Disabled" });
  expect(button).toBeDisabled();

  await user.click(button);
  expect(handleClick).not.toHaveBeenCalled();
});
