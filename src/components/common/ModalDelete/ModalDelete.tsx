import React from 'react';
import { TrashIcon } from '../Icons';
import {
  ButtonGroup,
  CancelButton,
  DeleteButton,
  DeleteMessage,
  DeleteTitle,
  ModalContainer,
  ModalContent,
  ModalOverlay
} from './ModalDelete.style';

type ModalDeleteProps = {
  active: boolean;
  title: string;
  message: string;
  handleCancel: () => void;
  handleDelete: () => void;
};

const ModalDelete: React.FC<ModalDeleteProps> = ({
  active,
  title,
  message,
  handleCancel,
  handleDelete
}) => (
  <>
    {active && (
      <ModalOverlay>
        <ModalContainer>
          <ModalContent>
            <TrashIcon />
            <DeleteTitle>{title}</DeleteTitle>
            <DeleteMessage>{message}</DeleteMessage>
            <ButtonGroup>
              <CancelButton onClick={handleCancel}>Cancel</CancelButton>
              <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
            </ButtonGroup>
          </ModalContent>
        </ModalContainer>
      </ModalOverlay>
    )}
  </>
);

export default ModalDelete;
