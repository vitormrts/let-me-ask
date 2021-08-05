import { DefaultImage } from 'src/styles/common';
import styled, { css } from 'styled-components';

type ContainerProps = {
  readonly isAnswered: boolean;
  readonly isHighlighted: boolean;
};

export const Name = styled.span`
  margin-left: 8px;
  color: #737380;
  font-size: 14px;
`;

export const Container = styled.div<ContainerProps>`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 8px;
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  ${({ isAnswered }) =>
    isAnswered &&
    css`
      background-color: #dbdcdd;
    `}

  ${({ isHighlighted, isAnswered }) =>
    isHighlighted &&
    !isAnswered &&
    css`
      background: #f4f0ff;
      border: 1px solid #835afd;
      ${Name} {
        color: #29292e;
      }
    `}
`;

export const ContentParagraph = styled.p`
  color: #29292e;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled(DefaultImage)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 16px;
  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.5);
    }
  }
`;
