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
  color: #737380;
  gap: 8px
    ${({ liked }) =>
      liked &&
      css`
        color: #835afd;
        svg path {
          stroke: #835afd;
        }
      `};
`;
