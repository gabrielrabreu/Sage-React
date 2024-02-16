import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import Card from "../../Card/Card";
import GridItem from "./GridItem";

const meta: Meta<typeof GridItem> = {
  title: "layout/Grid/GridItem",
  component: GridItem,
};

export default meta;

type Story = StoryObj<typeof GridItem>;

export const Example: Story = {
  args: {
    cols: 1,
    rows: 1,
    children: (
      <GridItem>
        <Card>
          <Card.Title>Card 1</Card.Title>
        </Card>
      </GridItem>
    ),
  },
};
