import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 32px auto;
  display: flex;
  padding: 0px 32px;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 0px 24px;
    margin: 24px auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 0px 16px;
    justify-content: space-between;
    margin: 16px auto;
  }
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
