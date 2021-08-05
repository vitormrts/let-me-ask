import { DefaultImage } from 'src/styles/common';
import styled from 'styled-components';

export const Container = styled.aside`
  flex: 7;

  background: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.secondary};

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 120px 80px;
`;
export const AskQuestions = styled.p`
  font-size: 24px;
  line-height: 32px;
  margin-top: 16px;
  color: ${({ theme }) => theme.background.default};
`;

export const Image = styled(DefaultImage)`
  max-width: 320px;
`;

export const Strong = styled.strong`
  font: 700 36px 'Poppins', sans-serif;
  line-height: 42px;
  margin-top: 16px;
`;
