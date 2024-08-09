import { Meta, StoryObj } from "@storybook/react";
import { CodeBlock } from "./CodeBlock";

const meta: Meta<typeof CodeBlock> = {
  component: CodeBlock,
  tags: ["autodocs"],
};

export default meta;

const code: string = `
  public class Person()
  {
      private Guid _Id;

      public Person()
      {
          _Id = Guid.NewGuid();
      }
  }
`;

export const Primary: StoryObj<typeof meta> = {
  args: {
    children: code,
  },
};
