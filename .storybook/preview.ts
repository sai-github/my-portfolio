// Configure React test environment before any React imports
import "./test-setup";

import type { Preview } from "@storybook/react-vite";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "../src/index.css";

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-theme",
  }),
];

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["@starkit", "Intro", "Atoms", "Molecules", "Example"],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      options: {
        iphone6: {
          name: "iPhone 6",
          styles: {
            width: "375px",
            height: "667px",
          },
        },
        // ... add more viewports if needed
      },
    },
    decorators,
  },
};

export default preview;
