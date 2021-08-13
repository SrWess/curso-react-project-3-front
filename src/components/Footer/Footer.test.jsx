import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(
      <Footer html={'<h1>Test component</h1>'} />,
    );
    expect(
      screen.getByRole('heading', { name: 'Test component' }),
    ).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        text-align: center;
      }

      .c0 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.6rem;
      }

      .c1 {
        max-width: 1200rem;
        margin: 0 auto;
        padding: 3.2rem;
      }

      <div>
        <footer
          class="c0"
        >
          <div
            class="c1"
          >
            <div
              class=""
            >
              <h1>
                Test component
              </h1>
            </div>
          </div>
        </footer>
      </div>
    `);
  });
});
