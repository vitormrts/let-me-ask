import { DefaultImage } from 'src/styles/common';
import styled from 'styled-components';

type RoomItemProps = {
  readonly isOpen: boolean;
};

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 32px;
`;

export const Title = styled.h2`
  font-size: 32px;
  margin-top: 40px;
  color: ${({ theme }) => theme.text.main};
`;

export const List = styled.ul`
  list-style: none;
`;

export const RoomItem = styled.li<RoomItemProps>`
  border-radius: 8px;
  background-color: ${({ isOpen, theme }) =>
    isOpen ? `${theme.background.secondary}` : `${theme.question.answered}`};
  margin: 30px 0px;
  padding: 24px;
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  padding: 8px 0;
  margin-top: 16px;
  border-radius: 8px;
`;

export const StatusMessage = styled.span`
  color: ${({ theme }) => theme.text.main};
`;

export const StatusOpen = styled(StatusContainer)`
  background-color: ${({ theme }) => theme.question.open};
`;

export const StatusClosed = styled(StatusContainer)`
  background-color: ${({ theme }) => theme.question.closed};
`;

export const RoomContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
    img {
      margin-right: 16px;
    }
  }
`;

export const EnterImage = styled(DefaultImage)`
  max-width: 24px;
`;

export const RoomInfo = styled.div``;

export const RoomName = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.text.main};
  width: 100%;
`;
