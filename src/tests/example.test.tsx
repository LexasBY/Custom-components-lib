import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // добавляет кастомные матчеры, например, toBeInTheDocument()

test("renders Hello, world!", () => {
  render(<h1>Hello, world!</h1>);
  expect(screen.getByText("Hello, world!")).toBeInTheDocument();
});
