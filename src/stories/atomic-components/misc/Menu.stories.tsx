import type { Meta, StoryObj } from "@storybook/react";

import Menu, { MenuList } from "./Menu";

const meta = {
  title: "Example/Menu",
  component: Menu,
  tags: ["autodocs"],
  argTypes: {
    onNavigate: { action: "navigated" },
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicMenu: Story = {
  args: {
    onNavigate: () => console.log("Clicked navigate"),
  },
  render: (args) => (
    <Menu {...args}>
      <MenuList label="Home" />
      <MenuList label="About" />
      <MenuList label="Contact" />
    </Menu>
  ),
};
