import { Meta, StoryObj } from "@storybook/react";

import { withRouter } from "../../utils";
import HeroSection from "./HeroSection";

const meta: Meta<typeof HeroSection> = {
  title: "Sage/HeroSection",
  component: HeroSection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
  },
  decorators: [withRouter],
};

export default meta;

type Story = StoryObj<typeof HeroSection>;

export const Example: Story = {
  args: {
    title: "Page Title",
    breadcrumb: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Products",
        link: "/products",
      },
      {
        name: "Detail 1",
        link: "/products/1",
      },
    ],
  },
};
