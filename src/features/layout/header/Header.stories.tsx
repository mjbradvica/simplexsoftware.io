import { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  component: Header,
  tags: ["autodocs"],
};

export default meta;

export const Primary: StoryObj<typeof meta> = {};
