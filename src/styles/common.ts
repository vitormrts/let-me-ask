import styled from 'styled-components';

export const DefaultWrapper = styled.div`
  width: 100vw;
`;

export const DefaultContainer = styled.div`
  padding: 0 32px;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 0 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 0 16px;
  }
`;

export const DefaultImage = styled.img`
  width: 100%;
`;

export const DefaultContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  width: 100%;
`;
