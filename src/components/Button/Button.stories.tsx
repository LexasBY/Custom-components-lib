import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "./Button";
import React from "react";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: fn(),
    size: "medium",
    variant: "outlined",
  },
  argTypes: {
    size: { control: "radio", options: ["small", "medium", "large"] },
    variant: { control: "radio", options: ["text", "contained", "outlined"] },
    children: { control: "text" },
  },
  decorators: [
    (Story, context) => {
      const { size, children } = context.args;
      const computedSize = size ?? "medium";
      const computedChildren =
        !children || (typeof children === "string" && children.trim() === "")
          ? computedSize.toUpperCase()
          : children;

      return <Story args={{ ...context.args, children: computedChildren }} />;
    },
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: "large",
    variant: "outlined",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    variant: "outlined",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    variant: "outlined",
  },
};
