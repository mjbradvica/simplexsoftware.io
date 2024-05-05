import { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";

const meta: Meta<typeof Footer> = {
  component: Footer,
  tags: ["autodocs"],
};

export default meta;

export const Primary: StoryObj<typeof meta> = {};
