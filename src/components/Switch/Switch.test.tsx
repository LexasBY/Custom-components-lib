import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Switch from "./Switch";

jest.mock("./Switch.module.css", () => ({
  switch: "switch",
  checked: "checked",
  disabled: "disabled",
  track: "track",
  thumb: "thumb",
}));

describe("Switch component", () => {
  test("renders correctly", () => {
    render(<Switch />);
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });

  test("toggles state on click and calls onChange", () => {
    const handleChange = jest.fn();
    render(<Switch onChange={handleChange} />);

    const switchElement = screen.getByRole("switch");
    fireEvent.click(switchElement);

    expect(handleChange).toHaveBeenCalledWith(true);
    fireEvent.click(switchElement);
    expect(handleChange).toHaveBeenCalledWith(false);
  });

  test("does not toggle when disabled", () => {
    const handleChange = jest.fn();
    render(<Switch disabled onChange={handleChange} />);

    const switchElement = screen.getByRole("switch");
    fireEvent.click(switchElement);

    expect(handleChange).not.toHaveBeenCalled();
  });

  test("applies correct classes", () => {
    const { container, rerender } = render(<Switch />);
    const switchDiv = container.querySelector("div");

    expect(switchDiv).toHaveClass("switch");
    expect(switchDiv).not.toHaveClass("checked");

    rerender(<Switch checked />);
    expect(switchDiv).toHaveClass("checked");

    rerender(<Switch disabled />);
    expect(switchDiv).toHaveClass("disabled");
  });
});
