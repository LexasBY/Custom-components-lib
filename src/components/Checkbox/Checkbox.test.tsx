import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Checkbox from "./Checkbox";

jest.mock("./Checkbox.module.css", () => ({
  wrapper: "wrapper",
  checked: "checked",
  disabled: "disabled",
  input: "input",
  checkbox: "checkbox",
  label: "label",
}));

describe("Checkbox component", () => {
  test("renders with default label", () => {
    render(<Checkbox label="Test Checkbox" />);
    expect(screen.getByText("Test Checkbox")).toBeInTheDocument();
  });

  test("initial state is unchecked", () => {
    render(<Checkbox label="Checkbox" />);
    const input = screen.getByRole("checkbox");
    expect(input).not.toBeChecked();
  });

  test("toggles state on click and calls onChange with new value", () => {
    const handleChange = jest.fn();
    render(<Checkbox label="Checkbox" onChange={handleChange} />);

    const input = screen.getByRole("checkbox");

    expect(input).not.toBeChecked();

    fireEvent.click(screen.getByLabelText("Checkbox"));

    expect(input).toBeChecked();
    expect(handleChange).toHaveBeenCalledWith(true);

    fireEvent.click(screen.getByLabelText("Checkbox"));
    expect(input).not.toBeChecked();
    expect(handleChange).toHaveBeenCalledWith(false);
    expect(handleChange).toHaveBeenCalledTimes(2);
  });

  test("does not toggle state when disabled", () => {
    const handleChange = jest.fn();
    render(<Checkbox label="Checkbox" onChange={handleChange} disabled />);

    const input = screen.getByRole("checkbox");
    expect(input).toBeDisabled();

    fireEvent.click(screen.getByLabelText("Checkbox"));
    expect(input).not.toBeChecked();
    expect(handleChange).not.toHaveBeenCalled();
  });

  test("applies correct classes based on state", () => {
    const { rerender } = render(<Checkbox label="Checkbox" />);
    const wrapperDiv = screen.getByLabelText("Checkbox").closest("div");

    expect(wrapperDiv).toHaveClass("wrapper");
    expect(wrapperDiv).not.toHaveClass("checked");

    fireEvent.click(screen.getByLabelText("Checkbox"));
    expect(wrapperDiv).toHaveClass("checked");

    rerender(<Checkbox label="Checkbox" disabled />);
    expect(wrapperDiv).toHaveClass("disabled");
  });
});
