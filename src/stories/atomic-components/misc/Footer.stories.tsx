import type { Meta, StoryObj } from "@storybook/react";

import Footer from "./Footer";

const meta = {
  title: "Atoms/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "There are no special props needed",
      },
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DesktopFooter: Story = {};

export const MobileFooter: Story = {
  parameters: {
    viewport: {
      defaultViewport: "iphone6",
    },
  },
};
