import styled from 'styled-components';

export const Container = styled.main`
  flex: 8;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 0 24px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;

  a {
    color: ${({ theme }) => theme.colors.pink};
  }
`;

export const CreateRoomHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin: 64px 0 24px;
  font-family: 'Poppins', sans-serif;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    margin-top: 24px;
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

export const Enter = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text.secondary};
  margin-top: 16px;
`;
