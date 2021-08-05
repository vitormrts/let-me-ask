import styled, { css } from 'styled-components';

type LikeButtonProps = {
  readonly liked?: boolean;
};

export const QuestionList = styled.div`
  margin: 24px auto 0px auto;
  max-width: 1120px;
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
