import type { Meta, StoryObj } from "@storybook/react-vite";

import Divider from "./Divider";
const meta = {
  title: "Atoms/Divider",
  component: Divider,
  tags: ["autodocs"],
  argTypes: {
    dir: { options: ["hz", "vt"], control: { type: "select" } },
    breakText: { control: "text" },
  },
  args: {
    dir: "hz",
    breakText: "OR",
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    dir: "hz",
  },
};

export const Vertical: Story = {
  args: {
    dir: "vt",
  },

  render: (args) => (
    <div style={{ height: 400, width: "100%" }}>
      <Divider {...args} />
    </div>
  ),
};
