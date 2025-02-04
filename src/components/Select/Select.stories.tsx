import type { Meta, StoryObj } from "@storybook/react";
import CustomSelect from "./Select";

const meta: Meta<typeof CustomSelect> = {
  title: "CustomSelect",
  component: CustomSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    options: { control: "object" },
    value: { control: "text" },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: "10", label: "Ten" },
  { value: "20", label: "Twenty" },
  { value: "30", label: "Thirty" },
];

export const Default: Story = {
  args: {
    label: "Age",
    options,
    value: "",
  },
};
