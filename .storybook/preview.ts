import type { Preview } from "@storybook/react";
import "../src/index.css";

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
  },
};

export default preview;
