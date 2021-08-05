import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 32px auto;
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  color: ${({ theme }) => theme.text.main};
`;

export const LengthQuestions = styled.span`
  margin-left: 16px;
  background-color: ${({ theme }) => theme.colors.pink};
  border-radius: 9999px;
  padding: 8px 16px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 500;
  font-size: 14px;
`;
