import { DefaultImage } from 'src/styles/common';
import styled from 'styled-components';

export const Container = styled.div``;

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

export const Button = styled.button``;

export const Image = styled(DefaultImage)``;
