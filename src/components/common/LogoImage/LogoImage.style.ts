import { DefaultImage } from 'src/styles/common';
import styled from 'styled-components';

export const Image = styled(DefaultImage)`
  align-self: center;
  max-width: 200px;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    max-width: 140px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    max-width: 100px;
  }
`;
