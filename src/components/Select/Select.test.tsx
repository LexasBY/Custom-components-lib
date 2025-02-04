import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CustomSelect from "./Select";

const options = [
  { value: "10", label: "Ten" },
  { value: "20", label: "Twenty" },
  { value: "30", label: "Thirty" },
];

describe("CustomSelect Component", () => {
  test("renders without crashing", () => {
    render(<CustomSelect label="Age" options={options} />);
    expect(screen.getByText("Age")).toBeInTheDocument();
  });

  test("opens the dropdown when clicked", () => {
    render(<CustomSelect label="Age" options={options} />);
    const selectControl = screen.getByText("Age");

    fireEvent.click(selectControl);
    expect(screen.getByText("Ten")).toBeInTheDocument();
    expect(screen.getByText("Twenty")).toBeInTheDocument();
    expect(screen.getByText("Thirty")).toBeInTheDocument();
  });

  test("closes the dropdown when clicking outside", () => {
    render(<CustomSelect label="Age" options={options} />);
    const selectControl = screen.getByText("Age");

    fireEvent.click(selectControl);
    expect(screen.getByText("Ten")).toBeInTheDocument();

    fireEvent.mouseDown(document.body);
    expect(screen.queryByText("Ten")).not.toBeInTheDocument();
  });

  test("selects an option and updates value", () => {
    const handleChange = jest.fn();
    render(
      <CustomSelect label="Age" options={options} onChange={handleChange} />,
    );

    fireEvent.click(screen.getByText("Age"));
    fireEvent.click(screen.getByText("Twenty"));

    expect(handleChange).toHaveBeenCalledWith("20");
  });

  test("maintains selected value (uncontrolled mode)", () => {
    render(<CustomSelect label="Age" options={options} />);

    fireEvent.click(screen.getByText("Age"));
    fireEvent.click(screen.getByText("Ten"));

    expect(screen.getByText("Ten")).toBeInTheDocument();
  });

  test("controlled component updates value correctly", () => {
    const { rerender } = render(
      <CustomSelect label="Age" options={options} value="10" />,
    );

    expect(screen.getByText("Ten")).toBeInTheDocument();

    rerender(<CustomSelect label="Age" options={options} value="20" />);
    expect(screen.getByText("Twenty")).toBeInTheDocument();
  });

  test("label moves up when an option is selected", () => {
    render(<CustomSelect label="Age" options={options} />);

    fireEvent.click(screen.getByText("Age"));
    fireEvent.click(screen.getByText("Ten"));

    expect(screen.getByText("Age")).toHaveClass("selected");
  });
});
