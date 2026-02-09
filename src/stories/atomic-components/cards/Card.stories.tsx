import type { Meta, StoryObj } from "@storybook/react-vite";

import Card from "./Card";
const meta = {
  title: "Atoms/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "This is a Card component. It accepts all standard HTML attributes for a `div` as props.",
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleCard: Story = {
  render: () => (
    <Card
      style={{
        height: 128,
        width: 128,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      128x128
    </Card>
  ),
};
