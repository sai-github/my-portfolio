import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Tab from "./Tab";
const meta = {
  title: "Atoms/Tab",
  component: Tab,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    active: { control: "boolean" },
    onClick: { action: "clicked" },
  },
  args: {
    onClick: action("clicked"),
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
