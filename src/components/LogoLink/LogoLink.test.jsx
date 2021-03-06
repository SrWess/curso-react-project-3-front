import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Logo" />);
    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Logo' })).toHaveAttribute('href', '#target');
  });

  it('should render image logo', () => {
    renderTheme(<LogoLink link="#target" text="Logo" srcImg="image.jpg" />);
    expect(screen.getByRole('img', { name: 'Logo' })).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<LogoLink link="#target" text="Logo" srcImg="image.jpg" />);
    expect(container.firstChild).toMatchSnapshot();
  })
});
