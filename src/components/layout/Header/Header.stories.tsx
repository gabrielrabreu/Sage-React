import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import Header from "./Header";

const meta: Meta<typeof Header> = {
  title: "layout/Header",
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

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
        Header Name
        <Header.Nav>
          <Header.NavItem>One</Header.NavItem>
          <Header.NavItem>Two</Header.NavItem>
          <Header.NavItem>Three</Header.NavItem>
        </Header.Nav>
      </>
    ),
  },
};
