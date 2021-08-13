import styled from 'styled-components';

type RoomItemProps = {
  readonly isOpen: boolean;
};

export const Container = styled.div`
  padding: 0 32px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 0 16px;
  }
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 32px;
  margin-top: 40px;
  color: ${({ theme }) => theme.text.main};
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    text-align: center;
  }
`;

export const Rooms = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 32px;
  @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const RoomItem = styled.div<RoomItemProps>`
  border-radius: 8px;
  background-color: ${({ isOpen, theme }) =>
    isOpen ? `${theme.background.secondary}` : `${theme.question.answered}`};
  padding: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  padding: 8px 0;
  border-radius: 8px;
  height: 50px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin: 16px auto;
    width: 156px;
  }
`;

export const StatusMessage = styled.span`
  color: white;
  font-size: 14px;
`;

export const StatusOpen = styled(StatusContainer)`
  background-color: ${({ theme }) => theme.question.open};
`;

export const StatusClosed = styled(StatusContainer)`
  background-color: ${({ theme }) => theme.question.closed};
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  justify-content: space-between;
  gap: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex-direction: column;
  }
`;

export const RoomContent = styled.div`
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
    font-size: 14px;
    img {
      margin-right: 16px;
    }
  }
`;

export const RoomName = styled.h3`
  font-weight: 500;
  font-size: 24px;
  color: ${({ theme }) => theme.text.main};
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    text-align: center;
  }
`;
