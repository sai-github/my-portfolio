import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-styling";
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
        order: ["Intro", "Atoms", "Molecules", "Example"],
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
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
