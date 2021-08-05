import styled, { css } from 'styled-components';

type StyledButtonProps = {
  readonly isOutlined?: boolean;
};

export const StyledButton = styled.button<StyledButtonProps>`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: #835afd;
  color: #fff;
  padding: 0 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0;
  transition: filter 0.2s;
  ${({ isOutlined }) =>
    isOutlined &&
    css`
      background-color: #fff;
      border: 1px solid #835afd;
      color: #835afd;
    `}
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    filter: brightness(0.9);
  }
  img {
    margin-right: 8px;
  }
`;