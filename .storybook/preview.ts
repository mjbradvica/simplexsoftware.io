import type { Preview } from "@storybook/react";
import "../src/styles/main.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on.*" },
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
