import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import TextField from "./TextField";

const meta = {
  title: "TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
    placeholder: "Enter text...",
    size: 20,
  },
  argTypes: {
    size: { control: "number" },
    error: { control: "boolean" },
    helperText: { control: "text" },
    label: { control: "text" },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Name",
    helperText: "Enter your name",
  },
};

export const Error: Story = {
  args: {
    label: "Email",
    error: true,
    helperText: "Invalid email format",
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
  },
};
