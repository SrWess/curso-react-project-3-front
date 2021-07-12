//Config do componente no storybook
import { Heading } from ".";

export default {
  title: "Heading",
  component: Heading,
  args: {
    children: "Teste",
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => <Heading {...args} />;
