import { GridTwoColumn } from '.';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: {
    title: 'GridTwoColumn',
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, blanditiis aliquam? Aliquam deleniti, exercitationem dolorem excepturi sequi odio similique praesentium molestias reprehenderit amet harum rerum recusandae quis eaque dolorum quibusdam!`,
    srcImg: 'assets/images/javascript.svg',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
