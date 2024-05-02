import { Meta, StoryObj } from "@storybook/react";
import { TitleType, Title } from "../index";

const meta: Meta<typeof Title> = {
  component: Title,
  tags: ["autodocs"],
};

export default meta;

export const One: StoryObj<typeof meta> = {
  args: {
    content: "Title",
    type: TitleType.One,
  },
};
