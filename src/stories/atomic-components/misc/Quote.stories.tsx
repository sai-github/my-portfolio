import type { Meta, StoryObj } from "@storybook/react";

import Quote from "./Quote";
const meta = {
  title: "Example/Quote",
  component: Quote,
  tags: ["autodocs"],
  argTypes: {
    variant: { options: ["small", "big"], control: { type: "select" } },
    text: { control: "text" },
    align: {
      options: ["left", "center", "right"],
      control: { type: "select" },
    },
  },
  args: {
    variant: "big",
    align: "left",
  },
} satisfies Meta<typeof Quote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BigQuote: Story = {
  args: {
    text: "This is sample text",
  },
};

export const AlignBigQuote: Story = {
  args: {
    text: "This is sample text",
    align: "center",
  },
};

export const SmallQuote: Story = {
  args: {
    text: "This is sample text",
    variant: "small",
  },
};
