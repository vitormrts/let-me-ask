import { DefaultImage } from 'src/styles/common';
import styled from 'styled-components';

export const Container = styled.aside`
  flex: 7;

  background: #835afd;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 120px 80px;
`;
export const AskQuestions = styled.p`
  font-size: 24px;
  line-height: 32px;
  margin-top: 16px;
  color: #f8f8f8;
`;

export const Image = styled(DefaultImage)`
  max-width: 320px;
`;

export const Strong = styled.strong`
  font: 700 36px 'Poppins', sans-serif;
  line-height: 42px;
  margin-top: 16px;
`;
