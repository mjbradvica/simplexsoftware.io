import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonType, expandToStorybookArgument } from "../index";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    buttonType: expandToStorybookArgument(ButtonType),
  },
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    content: "Button",
  },
};
