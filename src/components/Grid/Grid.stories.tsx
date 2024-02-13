import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import Grid from "./Grid";
import { Card } from "../Card";

const meta: Meta<typeof Grid> = {
  title: "Sage/Grid",
  component: Grid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    cols: {
      control: {
        type: "number",
      },
    },
    rows: {
      control: {
        type: "number",
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
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
