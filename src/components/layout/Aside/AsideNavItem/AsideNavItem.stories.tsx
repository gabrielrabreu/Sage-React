import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { withRouter } from "../../../../stories/withRouter";
import Icon from "../../../ui/Icon/Icon";
import AsideNavItem from "./AsideNavItem";

const meta: Meta<typeof AsideNavItem> = {
  title: "layout/Aside/AsideNavItem",
  component: AsideNavItem,
  decorators: [withRouter],
};

export default meta;

type Story = StoryObj<typeof AsideNavItem>;

export const Default: Story = {
  args: {
    icon: <Icon name="Bell" />,
    text: "Bell",
    link: "/bell",
  },
};
