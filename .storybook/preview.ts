import { Preview, ReactRenderer } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";

import "../src/styles/main.scss";

const preview: Preview = {
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      control: "text",
    },
    testId: {
      control: "text",
    },
  },
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
