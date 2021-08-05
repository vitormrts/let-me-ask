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
  @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
    padding: 100px 60px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 40px 60px;
    max-height: 320px;
    margin-bottom: 32px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 40px 40px;
  }
`;
export const AskQuestions = styled.p`
  font-size: 21px;
  line-height: 32px;
  margin-top: 16px;
  color: ${({ theme }) => theme.background.default};
  @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: 14px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    text-align: center;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
`;

export const Image = styled(DefaultImage)`
  max-width: 320px;
  @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
    max-width: 280px;
  }
`;

export const Strong = styled.strong`
  font: 700 32px 'Poppins', sans-serif;
  line-height: 42px;
  margin-top: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
    font-size: 28px;
    margin-top: 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    margin-top: 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    text-align: center;
  }
`;
