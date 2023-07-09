import type { Meta, StoryObj } from "@storybook/react";

import Chip from "./Chip";
const meta = {
  title: "Atoms/Chip",
  component: Chip,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
    },
    color: {
      control: "color",
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultChip: Story = {
  args: {
    name: "Item",
  },
};

export const ColoredChip: Story = {
  args: {
    name: "Success Item",
    color: "green",
  },
};
