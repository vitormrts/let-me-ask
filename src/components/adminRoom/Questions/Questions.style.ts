import styled from 'styled-components';

export const QuestionList = styled.div`
  padding: 0px 32px;
  margin-bottom: 32px;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 0px 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 0px 16px;
  }
`;
