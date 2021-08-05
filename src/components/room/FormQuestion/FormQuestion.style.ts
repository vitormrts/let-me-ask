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
  background: #fefefe;
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
  color: #29292e;
  font-weight: 500;
  font-size: 14px;
`;

export const SendQuestion = styled.span`
  font-size: 14px;
  color: #737388;
  font-weight: 500;
`;

export const Login = styled.button`
  background: transparent;
  border: none;
  color: #835afd;
  text-decoration: underline;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;
