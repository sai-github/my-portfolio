import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import { action } from "@storybook/addon-actions";
import { userEvent, within } from "@storybook/testing-library";

const meta = {
  title: "Atoms/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    onNavigate: { action: "navigated" },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderWithNoMenu: Story = {
  args: {
    labels: [],
  },
};

export const HeaderWithMenu: Story = {
  args: {
    labels: ["Home", "Contact Me"],
    onNavigate: action("navigated"),
  },
};

export const HeaderMobileViewClose: Story = {
  args: {
    labels: ["Home", "Contact Me"],
    onNavigate: action("navigated"),
  },
  parameters: {
    viewport: {
      defaultViewport: "iphone6",
    },
    docs: {
      description: {
        story:
          "This story demonstrates the mobile view with the menu closed. Please check individually where it is bound in viewport.",
      },
    },
  },
};

export const HeaderMobileViewOpen: Story = {
  args: {
    labels: ["Home", "Contact Me"],
    onNavigate: action("navigated"),
  },
  parameters: {
    viewport: {
      defaultViewport: "iphone6",
    },
    docs: {
      description: {
        story:
          "This story demonstrates the mobile view with the menu open. Please check individually where it is bound in viewport.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Get the button element
    const button = canvas.getByRole("button");
    // Simulate a click event
    await userEvent.click(button);
  },
};
