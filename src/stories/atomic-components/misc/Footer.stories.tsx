import type { Meta, StoryObj } from "@storybook/react-vite";

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
  globals: {
    viewport: {
      value: "iphone6",
      isRotated: false
    }
  },
};
