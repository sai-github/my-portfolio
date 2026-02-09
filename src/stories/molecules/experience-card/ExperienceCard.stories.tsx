import type { Meta, StoryObj } from "@storybook/react-vite";

import ExperienceCard from "./ExperienceCard";
const meta = {
  title: "Molecules/ExperienceCard",
  component: ExperienceCard,
  tags: ["autodocs"],

  args: {
    logoLight: "https://dummyimage.com/64x64/8f8f8f/0d0d0d&text=logo",
    logoDark: "https://dummyimage.com/64x64/1a1a1a/f2f2f2&text=logo",
    title: "Engineer",
    timeline: "Sept '18 - Oct '23",
    company: "Airbus",
    data: {
      type: "quote",
      quote:
        "Refactored React codebase and implemented core features for a tool which provides statistical and analytical capabilities for Material quality and Test reduction",
    },
  },
} satisfies Meta<typeof ExperienceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleExperienceCard: Story = {};
export const ExperienceCardWithSkills: Story = {
  args: {
    skills: ["React", "Figma"],
  },
};

export const SmallExperienceCard: Story = {
  args: {
    variant: "small",
  },
};
