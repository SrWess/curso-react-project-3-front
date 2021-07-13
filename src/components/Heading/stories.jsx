//Config do componente no storybook
import { Heading } from ".";

export default {
  title: "Heading",
  component: Heading,
  args: {
    children: "Texto escuro",
  },
  argTypes: {
    //Tipo dos argumentos recebidos
    children: { type: "string" },
  },
  //Config cor padrão de background
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

//Alteração do background
Light.parameters = {
  backgrounds: {
    default: "light",
  },
};

//Realizando troca do nome
Dark.args = {
  children: "Texto claro",
  colorDark: false,
};
