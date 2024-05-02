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

export const SizeTwo: StoryObj<typeof meta> = {
  args: {
    content: "Title",
    titleType: TitleType.Two,
  },
};

export const SizeThree: StoryObj<typeof meta> = {
  args: {
    content: "Title",
    titleType: TitleType.Three,
  },
};

export const SizeFour: StoryObj<typeof meta> = {
  args: {
    content: "Title",
    titleType: TitleType.Four,
  },
};

export const SizeFive: StoryObj<typeof meta> = {
  args: {
    content: "Title",
    titleType: TitleType.Five,
  },
};

export const SizeSix: StoryObj<typeof meta> = {
  args: {
    content: "Title",
    titleType: TitleType.Six,
  },
};
