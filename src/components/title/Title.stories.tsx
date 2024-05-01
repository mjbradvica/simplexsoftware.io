import { Meta, StoryObj } from "@storybook/react";
import { TitleType } from "./TitleType";
import Title from "./Title";

const meta: Meta<typeof Title> = {
  component: Title,
  tags: ["autodocs"],
};

export default meta;

export const One: StoryObj<typeof Title> = {
  args: {
    content: "Title",
    type: TitleType.One,
  },
};
