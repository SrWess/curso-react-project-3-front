import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 1200rem;
    margin: 0 auto;
    padding: ${theme.spacings.large};
  `}
`;
