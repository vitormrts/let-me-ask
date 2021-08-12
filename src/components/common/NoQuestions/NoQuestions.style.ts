import styled from 'styled-components';

export const NoQuestionsContainer = styled.div`
  margin: 0 auto;
  margin-top: 32px;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

export const NoQuestionsImage = styled.div``;

export const NoQuestionsTitle = styled.h2`
  font-weight: 500;
  color: ${({ theme }) => theme.text.main};
  font-size: 32px;
  text-align: center;
  margin: 32px 0 16px 0;
`;

export const NoQuestionsText = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 16px;
  text-align: center;
`;
