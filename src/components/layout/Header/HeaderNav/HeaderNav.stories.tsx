import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import HeaderNavItem from "../HeaderNavItem/HeaderNavItem";
import HeaderNav from "./HeaderNav";

const meta: Meta<typeof HeaderNav> = {
  title: "layout/Header/HeaderNav",
  component: HeaderNav,
};

export default meta;

type Story = StoryObj<typeof HeaderNav>;

export const Example: Story = {
  args: {
    children: "Header",
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
    children: (
      <>
        <HeaderNavItem>One</HeaderNavItem>
        <HeaderNavItem>Two</HeaderNavItem>
        <HeaderNavItem>Three</HeaderNavItem>
      </>
    ),
  },
};
