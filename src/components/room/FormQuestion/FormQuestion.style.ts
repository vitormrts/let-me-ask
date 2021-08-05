import { DefaultImage } from 'src/styles/common';
import styled from 'styled-components';

export const Form = styled.form`
  max-width: 1120px;
  margin: 0 auto;
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
`;

export const FormFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
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
`;

export const SendQuestion = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.span.default};
  font-weight: 500;
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
