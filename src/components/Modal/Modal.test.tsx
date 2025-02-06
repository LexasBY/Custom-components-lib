import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Modal from "./Modal";

jest.mock("./Modal.module.css", () => ({
  windowWrapper: "windowWrapper",
  background: "background",
  window: "window",
  default: "default",
  error: "error",
}));

describe("Modal component", () => {
  test("renders children when open", () => {
    render(
      <Modal open={true}>
        <p>Modal Content</p>
      </Modal>,
    );

    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  test("does not render when closed", () => {
    render(
      <Modal open={false}>
        <p>Modal Content</p>
      </Modal>,
    );

    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
  });

  test("calls onClose when clicking the background", () => {
    const handleClose = jest.fn();
    render(
      <Modal open={true} onClose={handleClose}>
        <p>Modal Content</p>
      </Modal>,
    );

    fireEvent.click(screen.getByTestId("background"));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test("calls onClose when pressing Escape", () => {
    const handleClose = jest.fn();
    render(
      <Modal open={true} onClose={handleClose}>
        <p>Modal Content</p>
      </Modal>,
    );

    fireEvent.keyDown(document, { key: "Escape", code: "Escape" });

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test("applies correct variant class", () => {
    const { rerender } = render(
      <Modal open={true} variant="default">
        <p>Modal Content</p>
      </Modal>,
    );

    const modals = screen.getAllByRole("dialog");
    expect(modals[0]).toHaveClass("default");

    rerender(
      <Modal open={true} variant="error">
        <p>Modal Content</p>
      </Modal>,
    );

    const updatedModals = screen.getAllByRole("dialog");
    expect(updatedModals[0]).toHaveClass("error");
  });

  test("prevents scrolling when open and restores it when closed", () => {
    expect(document.body.style.overflow).toBe("auto");

    const { rerender } = render(<Modal open={true} />);
    expect(document.body.style.overflow).toBe("hidden");

    rerender(<Modal open={false} />);
    expect(document.body.style.overflow).toBe("auto");
  });
});
