import type { Meta, StoryObj } from "@storybook/vue3-vite";
import ButtonElement from "./ButtonElement.vue";

const meta: Meta<typeof ButtonElement> = {
  component: ButtonElement,
};

export default meta;

export const Primary: StoryObj<typeof meta> = {};
