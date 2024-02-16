import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import Card from "../Card/Card";
import Grid from "./Grid";

const meta: Meta<typeof Grid> = {
  title: "layout/Grid",
  component: Grid,
};

export default meta;

type Story = StoryObj<typeof Grid>;

export const Example: Story = {
  args: {
    cols: 1,
    rows: 1,
    children: (
      <>
        <Grid.Item>
          <Card>
            <Card.Title>Card 1</Card.Title>
          </Card>
        </Grid.Item>
        <Grid.Item>
          <Card>
            <Card.Title>Card 2</Card.Title>
          </Card>
        </Grid.Item>
        <Grid.Item cols={2}>
          <Card>
            <Card.Title>Card 3</Card.Title>
          </Card>
        </Grid.Item>
        <Grid.Item rows={2}>
          <Card>
            <Card.Title>Card 4</Card.Title>
          </Card>
        </Grid.Item>
        <Grid.Item>
          <Card>
            <Card.Title>Card 5</Card.Title>
          </Card>
        </Grid.Item>
      </>
    ),
  },
};
