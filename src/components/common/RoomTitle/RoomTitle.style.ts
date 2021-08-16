import { DefaultContainer, DefaultContent } from 'src/styles/common';
import styled from 'styled-components';

export const Container = styled(DefaultContainer)`
  margin: 32px auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    margin: 24px auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    justify-content: space-between;
    margin: 16px auto;
  }
`;

export const Content = styled(DefaultContent)`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  color: ${({ theme }) => theme.text.main};
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 16px;
  }
`;

export const LengthQuestions = styled.span`
  margin-left: 16px;
  background-color: ${({ theme }) => theme.colors.pink};
  border-radius: 9999px;
  padding: 8px 16px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 500;
  font-size: 14px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 12px;
  }
`;
