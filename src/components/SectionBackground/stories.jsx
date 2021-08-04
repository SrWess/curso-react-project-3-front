import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>Section Background</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          molestias voluptatum quisquam exercitationem veniam fugit dignissimos
          sit corrupti ipsam, aperiam ipsa ratione fuga consectetur. Illum
          distinctio quod asperiores tempora. Obcaecati!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
