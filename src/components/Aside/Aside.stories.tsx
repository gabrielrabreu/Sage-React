import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { withRouter } from "../../utils";
import { Icon } from "../Icon";
import Aside from "./Aside";

import styles from "./Aside.module.scss";

const meta: Meta<typeof Aside> = {
  title: "Sage/Aside",
  component: Aside,
  parameters: {
    layout: "centered",
  },
  decorators: [withRouter],
  tags: ["autodocs"],
  argTypes: {
    hidden: {
      control: "boolean",
    },
    children: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Aside>;

export const Example: Story = {
  args: {
    hidden: false,
    hiddenClassName: styles.asideStorybookHidden,
    children: "Aside",
    className: styles.asideStorybook,
    testId: "sage-aside",
  },
};

export const Nav: Story = {
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    hidden: false,
    hiddenClassName: styles.asideStorybookHidden,
    children: (
      <>
        <Aside.Nav>
          <Aside.NavItem icon={<Icon name="Book" />} text="Book" link="/book" />
          <Aside.NavItem icon={<Icon name="Home" />} text="Home" link="/home" />
          <Aside.NavItem icon={<Icon name="User" />} text="User" link="/user" />
        </Aside.Nav>
      </>
    ),
    className: styles.asideStorybook,
    testId: "sage-aside",
  },
};
