import React from "react";
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
    variant: {
      control: "radio",
      options: ["outlined", "filled", "standard"],
    },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    onChange: { action: "changed" },
    label: { control: "text" },
  },
  decorators: [
    (Story, context) => {
      const variantLabel = context.args.variant
        ? context.args.variant.charAt(0).toUpperCase() +
          context.args.variant.slice(1)
        : "TextField";
      return (
        <Story
          args={{
            ...context.args,
            label: variantLabel,
          }}
        />
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    variant: "outlined",
    disabled: false,
    label: "Outlined",
    id: "outlined-input",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    disabled: false,
    label: "Filled",
    id: "filled-input",
  },
};

export const Standard: Story = {
  args: {
    variant: "standard",
    disabled: false,
    label: "Standard",
    id: "standard-input",
  },
};

export const ErrorState: Story = {
  args: {
    variant: "outlined",
    error: true,
    label: "Outlined",
    id: "error-input",
  },
};
