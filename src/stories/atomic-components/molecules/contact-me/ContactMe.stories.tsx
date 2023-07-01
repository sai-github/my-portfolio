import type { Meta, StoryObj } from "@storybook/react";

import ContactMe from "./ContactMe";
const meta = {
  title: "Molecules/ContactMe",
  component: ContactMe,
  tags: ["autodocs"],

  args: {
    avatar: "https://dummyimage.com/64x64/8f8f8f/0d0d0d&text=logo",
    status:
      "seeking opportunities that harmonize the realms of UI development and design",
  },
} satisfies Meta<typeof ContactMe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleExperienceCard: Story = {};
