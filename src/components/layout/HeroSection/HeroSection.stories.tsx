import { Meta, StoryObj } from "@storybook/react";

import { withRouter } from "../../../stories/withRouter";
import HeroSection from "./HeroSection";

const meta: Meta<typeof HeroSection> = {
  title: "layout/HeroSection",
  component: HeroSection,
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
