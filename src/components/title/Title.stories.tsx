import { Meta, StoryObj } from "@storybook/react";
import Title from "./Title";
import { TitleType } from "./TitleType";

const meta: Meta<typeof Title> = {
  component: Title,
  tags: ["autodocs"],
};

export default meta;

export const One: StoryObj<typeof Title> = {
  args: {
    content: "title",
    type: TitleType.One,
  },
};
