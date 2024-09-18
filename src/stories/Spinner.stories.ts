import type { Meta, StoryObj } from "@storybook/react";

import Spinner from "../components/UI/Spinner";

import { Size } from "../constants/Size";

const meta = {
  title: "UI/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: Size,
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: Size.LARGE,
  },
};

export const Small: Story = {
  args: {
    size: Size.SMALL,
  },
};
