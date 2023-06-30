import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./Button";
import { Send } from "iconsax-react";

const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary", "outline"],
      control: { type: "select" },
    },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
  },
};

export const WithIconPrimary: Story = {
  render: (args) => (
    <Button {...args} Icon={Send} onClick={action("clicked")}>
      Hello
    </Button>
  ),
  name: "Button with Icon",
};

export const IconButton: Story = {
  render: (args) => (
    <Button {...args} Icon={Send} onClick={action("clicked")} />
  ),
};
