import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "./Button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: "large",
    children: "large",
    variant: "outlined",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "small",
    variant: "outlined",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    children: "medium",
    variant: "outlined",
  },
};
