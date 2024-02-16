import { Meta, StoryObj } from "@storybook/react";

import Typography from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "ui/Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: [
        "label",
        "link",
        "meta",
        "error",
        "title",
        "highlight",
        "caption",
        "body",
        "heading",
        "subheading",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Example: Story = {
  args: {
    variant: "label",
    children: "Example Text",
  },
};
