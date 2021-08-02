import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { NavLinks } from '.';
import { theme } from '../../styles/theme';


import mock from './mock';

describe('<NavLinks />', () => {
  //Verificação se foi renderizado os 10 links do mockup
  it('should render links', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  //Verificação ao não passar um array de links
  it('should not render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  //Verificação se ao chegar no breakpoint 768px está sendo aplicado estilização necessária
  it('should render mobile links', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should match snapshot', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole('link')).toMatchSnapshot();
  });
});
