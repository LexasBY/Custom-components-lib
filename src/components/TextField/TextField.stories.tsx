import type { Meta, StoryObj } from "@storybook/react";
import TextField from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "radio", options: ["outlined", "filled", "standard"] },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    label: { control: "text" },
    helperText: { control: "text" },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    variant: "outlined",
    disabled: false,
    label: "Name",
    helperText: "Enter your name",
    id: "outlined-input",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    disabled: false,
    label: "Password",
    helperText: "Enter your password",
    id: "filled-input",
  },
};

export const Standard: Story = {
  args: {
    variant: "standard",
    disabled: false,
    label: "Email",
    helperText: "Enter your email",
    id: "standard-input",
  },
};

export const ErrorState: Story = {
  args: {
    variant: "outlined",
    error: true,
    label: "Email",
    helperText: "Invalid email format",
    id: "error-input",
  },
};
