import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import Button from "../Button/Button";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    open: { control: "boolean" },
    variant: { control: "radio", options: ["default", "error"] },
    onClose: { action: "closed" },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ControlledModal = ({
  variant = "default",
  open: initialOpen = false,
}: {
  variant?: "default" | "error";
  open?: boolean;
}) => {
  const [open, setOpen] = useState(initialOpen);

  useEffect(() => {
    setOpen(initialOpen);
  }, [initialOpen]);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} variant={variant}>
        <div style={{ textAlign: "center" }}>
          <h2>Modal Title</h2>
          <p>This is a modal with variant "{variant}".</p>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </div>
      </Modal>
    </>
  );
};

export const Default: Story = {
  args: {
    open: false,
    variant: "default",
  },
  render: (args) => <ControlledModal {...args} />,
};

export const Error: Story = {
  args: {
    open: false,
    variant: "error",
  },
  render: (args) => <ControlledModal {...args} />,
};
