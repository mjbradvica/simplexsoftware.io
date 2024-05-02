import { Meta, StoryObj } from "@storybook/react";
import { Container } from "../index";

const meta: Meta<typeof Container> = {
  component: Container,
  tags: ["autodocs"],
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  render: () => (
    <Container>
      <p>This is a container!</p>
    </Container>
  ),
};
