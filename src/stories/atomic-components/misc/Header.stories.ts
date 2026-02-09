import type { Meta, StoryObj } from "@storybook/react-vite";
import Header from "./Header";
import { action } from "storybook/actions";
import { userEvent, within } from "storybook/test";

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
    docs: {
      description: {
        story:
          "This story demonstrates the mobile view with the menu closed. Please check individually where it is bound in viewport.",
      },
    }
  },

  globals: {
    viewport: {
      value: "iphone6",
      isRotated: false
    }
  }
};

export const HeaderMobileViewOpen: Story = {
  args: {
    labels: ["Home", "Contact Me"],
    onNavigate: action("navigated"),
  },

  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the mobile view with the menu open. Please check individually where it is bound in viewport.",
      },
    }
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Note: Storybook viewport addon doesn't change window.innerWidth,
    // so the useIsDesktop hook may still return true. Only click if button exists.
    const button = canvas.queryByRole("button");
    if (button) {
      await userEvent.click(button);
    }
  },

  globals: {
    viewport: {
      value: "iphone6",
      isRotated: false
    }
  }
};
