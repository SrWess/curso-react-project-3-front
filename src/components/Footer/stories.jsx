import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p><a href="#target">Footer - Desenvolvido por Wesley Anjos</a></p>`,
  }
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};

