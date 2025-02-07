import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useState } from "react";
import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
    defaultChecked: { control: "boolean" },
    disabled: { control: "boolean" },
    label: { control: "text" },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "",
    checked: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    useEffect(() => {
      setChecked(args.checked);
    }, [args.checked]);
    return <Checkbox {...args} checked={checked} onChange={setChecked} />;
  },
};

export const Checked: Story = {
  args: {
    label: "",
    checked: true,
  },
};

export const UnChecked: Story = {
  args: {
    label: "",
    checked: false,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "",
    checked: true,
    disabled: true,
  },
};
export const Disabled: Story = {
  args: {
    label: "",
    checked: false,
    disabled: true,
  },
};
