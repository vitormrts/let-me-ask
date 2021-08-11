import { DefaultImage } from 'src/styles/common';
import styled from 'styled-components';

export const Form = styled.form`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0px 32px;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 0px 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 0px 16px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: 0;
  padding: 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.textarea.default};
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  resize: vertical;
  min-height: 138px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    min-height: 90px;
    font-size: 14px;
  }
`;

export const FormFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  button {
    margin-left: auto;
    @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
      padding: 0 16px;
      max-height: 36px;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const IconAvatar = styled(DefaultImage)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const Name = styled.span`
  margin-left: 8px;
  color: ${({ theme }) => theme.text.main};
  font-weight: 500;
  font-size: 14px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 12px;
  }
`;

export const SendQuestion = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.span.default};
  font-weight: 500;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 12px;
  }
`;

export const Login = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.main};
  text-decoration: underline;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;
