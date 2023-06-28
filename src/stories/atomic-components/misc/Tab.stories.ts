import type { Meta, StoryObj } from "@storybook/react";

import Tab from "./Tab";
const meta = {
  title: "Example/Tab",
  component: Tab,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    active: { control: "boolean" },
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalTab: Story = {
  args: {
    label: "TabName",
  },
};

export const ActiveTab: Story = {
  args: {
    label: "TabName",
    active: true,
  },
};
