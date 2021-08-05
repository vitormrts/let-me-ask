import styled, { css } from 'styled-components';

type LikeButtonProps = {
  readonly liked?: boolean;
};

export const QuestionList = styled.div`
  margin: 24px auto 0px auto;
  max-width: 1120px;
  padding: 0px 32px;
  margin-bottom: 32px;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 0px 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 0px 16px;
  }
`;

export const LikeButton = styled.button<LikeButtonProps>`
  display: flex;
  align-items: flex-end;
  color: ${({ theme }) => theme.text.secondary};
  gap: 8px
    ${({ liked }) =>
      liked &&
      css`
        color: ${({ theme }) => theme.colors.main};
        svg path {
          stroke: ${({ theme }) => theme.colors.main};
        }
      `};
`;
