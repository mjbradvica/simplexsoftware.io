import { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
import { wrapInMemoryBrowser } from "../../../infrastructure";

const meta: Meta<typeof Header> = {
  component: Header,
  tags: ["autodocs"],
  render: () => wrapInMemoryBrowser(<Header />),
};

export default meta;

export const Primary: StoryObj<typeof meta> = {};
