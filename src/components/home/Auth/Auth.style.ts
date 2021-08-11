import { DefaultImage } from 'src/styles/common';
import styled from 'styled-components';

export const Authentication = styled.main`
  flex: 8;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding-bottom: 32px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;
`;

export const AuthHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CreateRoom = styled.button`
  margin-top: 32px;
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
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    margin-top: 24px;
    font-size: 14px;
  }
`;

export const GoogleImage = styled(DefaultImage)`
  margin-right: 16px;
  max-width: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    max-width: 20px;
    margin-right: 8px;
  }
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
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 14px;
  }
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
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin: 16px 0;
  }
`;

export const AllRooms = styled.p`
  margin-top: 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.input.default};
`;

export const AllRoomsButton = styled.button`
  font-size: 14px;
  background: transparent;
  border: none;
  margin-left: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.pink};
`;
