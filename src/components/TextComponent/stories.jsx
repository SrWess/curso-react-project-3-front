import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, 
    ad iusto? Doloribus dicta sapiente, rem eveniet hic quis labore asperiores vel
    optio eum? Vel, impedit molestiae! Qui iure asperiores eos.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
