import { DefaultContainer, DefaultContent } from 'src/styles/common';
import styled, { css } from 'styled-components';

type LikeButtonProps = {
  readonly liked?: boolean;
};

export const Container = styled(DefaultContainer)``;

export const Content = styled(DefaultContent)``;

export const QuestionList = styled.div`
  margin: 24px auto 0px auto;
  margin-bottom: 32px;
`;

export const LikeCount = styled.span`
  color: ${({ theme }) => theme.text.main};
  margin-right: 8px;
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
          stroke: ${({ theme }) => theme.text.main};
        }
      `};
`;
