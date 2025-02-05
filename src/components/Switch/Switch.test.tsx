import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Switch from "./Switch";

jest.mock("./Switch.module.css", () => ({
  switch: "switch",
  checked: "checked",
  disabled: "disabled",
  input: "input",
  track: "track",
  thumb: "thumb",
}));

describe("Switch component", () => {
  test("renders without crashing", () => {
    render(<Switch />);
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });

  test("initial state is unchecked", () => {
    render(<Switch />);
    const input = screen.getByRole("switch");
    expect(input).toHaveAttribute("aria-checked", "false");
  });

  test("toggles state on click and calls onChange", () => {
    const handleChange = jest.fn();
    render(<Switch onChange={handleChange} />);

    const switchElement = screen.getByRole("switch");

    fireEvent.click(switchElement);
    expect(switchElement).toHaveAttribute("aria-checked", "true");
    expect(handleChange).toHaveBeenCalledWith(true);

    fireEvent.click(switchElement);
    expect(switchElement).toHaveAttribute("aria-checked", "false");
    expect(handleChange).toHaveBeenCalledWith(false);
    expect(handleChange).toHaveBeenCalledTimes(2);
  });

  test("does not toggle when disabled", () => {
    const handleChange = jest.fn();
    render(<Switch onChange={handleChange} disabled />);

    const switchElement = screen.getByRole("switch");

    expect(switchElement).toHaveAttribute("aria-disabled", "true");

    fireEvent.click(switchElement);
    expect(switchElement).toHaveAttribute("aria-checked", "false");
    expect(handleChange).not.toHaveBeenCalled();
  });

  test("applies correct classes based on state", () => {
    const { container, rerender } = render(<Switch />);
    const switchElement = container.querySelector("label");

    expect(switchElement).toHaveClass("switch");
    expect(switchElement).not.toHaveClass("checked");

    fireEvent.click(switchElement!);
    expect(switchElement).toHaveClass("checked");

    rerender(<Switch disabled />);
    expect(switchElement).toHaveClass("disabled");
  });
});
