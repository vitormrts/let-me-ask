import styled, { css } from 'styled-components';

type StyledButtonProps = {
  readonly isOutlined?: boolean;
};

export const StyledButton = styled.button<StyledButtonProps>`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.secondary};
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
      background-color: ${({ theme }) => theme.colors.secondary};
      border: 1px solid ${({ theme }) => theme.colors.main};
      color: ${({ theme }) => theme.colors.main};
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
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 14px;
  }
`;
