import type { Meta, StoryObj } from "@storybook/react";
import { ArrowCircleRight } from "iconsax-react";

import StyledList from "./StyledList";
const meta = {
  title: "Atoms/StyledList",
  component: StyledList,
  tags: ["autodocs"],
  argTypes: {
    list: { control: "object" },
  },
  args: {
    list: ["Item 1", "Item 2", "Item 3"],
  },
} satisfies Meta<typeof StyledList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultStyledList: Story = {};

export const CustomizedStyledList: Story = {
  render: (args) => <StyledList {...args} Icon={ArrowCircleRight} />,
};
