import type { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";

import ContactMe from "./ContactMe";
const meta = {
  title: "Molecules/ContactMe",
  component: ContactMe,
  tags: ["autodocs"],

  args: {
    avatar: "https://dummyimage.com/64x64/8f8f8f/0d0d0d&text=logo",
    status:
      "seeking opportunities that harmonize the realms of UI development and design",
    social: {
      githubURL: "https://github.com/sai-github",
      linkedinURL: "https://www.linkedin.com/in/sai-bhargava-ramu",
    },
    onSend: action("onSend"),
  },
} satisfies Meta<typeof ContactMe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DesktopView: Story = {};

export const MobileView: Story = {
  globals: {
    viewport: {
      value: "iphone6",
      isRotated: false
    }
  },
};
