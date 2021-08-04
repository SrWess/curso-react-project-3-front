import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>Section Container</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni molestias
          voluptatum quisquam exercitationem veniam fugit dignissimos sit corrupti
          ipsam, aperiam ipsa ratione fuga consectetur. Illum distinctio quod
          asperiores tempora. Obcaecati!
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
      <SectionContainer {...args} />
    </div>
  );
};

