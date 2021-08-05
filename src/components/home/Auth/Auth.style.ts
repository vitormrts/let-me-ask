import { DefaultImage } from 'src/styles/common';
import styled from 'styled-components';

export const Authentication = styled.main`
  flex: 8;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;
`;

export const CreateRoom = styled.button`
  margin-top: 64px;
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: ${({ theme }) => theme.icons.google};
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const GoogleImage = styled(DefaultImage)`
  margin-right: 16px;
  max-width: 24px;
`;

export const Form = styled.form`
  button {
    margin-top: 16px;
    width: 100%;
  }
`;

export const CodeInput = styled.input`
  height: 50px;
  border-radius: 8px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.input.default};
  width: 100%;
`;

export const Separator = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.input.default};

  margin: 32px 0;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.input.default};
    margin-right: 16px;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.input.default};
    margin-left: 16px;
  }
`;
