import { Meta, StoryObj } from "@storybook/react";

import { withRouter } from "../../../stories/withRouter";
import Breadcrumb from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "layout/Breadcrumb",
  component: Breadcrumb,
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
