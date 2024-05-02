import { Meta, StoryObj } from "@storybook/react";
import { TitleType, Title, expandToStorybookArgument } from "../index";

const meta: Meta<typeof Title> = {
  component: Title,
  tags: ["autodocs"],
  argTypes: {
    titleType: expandToStorybookArgument(TitleType),
  },
};

export default meta;

export const SizeOne: StoryObj<typeof meta> = {
  args: {
    content: "Title",
    titleType: TitleType.One,
  },
};
