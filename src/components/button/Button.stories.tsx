import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import {
  Button,
  ButtonType,
  ColorType,
  expandToStorybookArgument,
} from "../index";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  args: { onClick: fn() },
  argTypes: {
    buttonType: expandToStorybookArgument(ButtonType),
    colorType: expandToStorybookArgument(ColorType),
  },
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    content: "Primary",
  },
};

export const Secondary: StoryObj<typeof meta> = {
  args: {
    content: "Secondary",
    colorType: ColorType.Secondary,
  },
};

export const Tertiary: StoryObj<typeof meta> = {
  args: {
    content: "Tertiary",
    colorType: ColorType.Tertiary,
  },
};
