import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    flex-direction: column;
  }
`;
