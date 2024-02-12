import { Meta, StoryObj } from "@storybook/react";

import { withRouter } from "../../utils";
import Breadcrumb from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "Sage/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [withRouter],
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Example: Story = {
  args: {
    items: [
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
