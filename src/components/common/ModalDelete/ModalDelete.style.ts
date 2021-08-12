import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  background: ${({ theme }) => theme.background.default};
  padding: 24px;
  border-radius: 8px;
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const DeleteTitle = styled.h2`
  margin: 32px 0 16px 0;
  color: ${({ theme }) => theme.text.main};
`;

export const DeleteMessage = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  text-align: center;
  width: 300px;
  line-height: 24px;
  font-size: 16px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  gap: 16px;
`;

export const Button = styled.button`
  width: 200px;
  background: none;
  border: 0;
  color: white;
  padding: 15px 30px;
  border-radius: 8px;
`;

export const CancelButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.main};
  cursor: pointer;
`;

export const DeleteButton = styled(Button)`
  background-color: ${({ theme }) => theme.question.closed};
`;
