import React, { useState } from 'react';
import {
  Button,
  ModalDelete,
  RoomCode,
  SwitcherTheme
} from 'src/components/common';
import IconLogoLight from 'src/assets/icons/logo-light.svg';
import IconLogoDark from 'src/assets/icons/logo-dark.svg';
import { useHistory } from 'react-router';
import { database } from 'src/services/firebase';
import { useTheme } from 'styled-components';
import {
  Content,
  Header,
  LogoWrapper,
  Logo,
  Info
} from './AdminRoomHeader.style';

type AdminRoomHeaderProps = {
  roomId: string;
};

const AdminRoomHeader: React.FC<AdminRoomHeaderProps> = ({ roomId }) => {
  const [modalActive, setModalActive] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const history = useHistory();
  const theme = useTheme();

  const image = theme.title === 'light' ? IconLogoLight : IconLogoDark;

  const handleOpenModal = () => {
    setModalTitle('End Room');
    setModalMessage(
      'Do you really want to end this room? It cannot be retrieved'
    );
    setModalActive(true);
  };

  const handleCancelRoom = () => {
    setModalActive(false);
  };

  const handleEndRoom = async () => {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date()
    });

    history.push('/');
  };

  return (
    <Header>
      <ModalDelete
        active={modalActive}
        title={modalTitle}
        message={modalMessage}
        handleCancel={handleCancelRoom}
        handleDelete={handleEndRoom}
      />
      <Content className="content">
        <LogoWrapper>
          <Logo src={image} alt="Letmeask" />
          <SwitcherTheme />
        </LogoWrapper>
        <Info>
          <RoomCode code={roomId} />
          <Button isOutlined onClick={handleOpenModal}>
            Close room
          </Button>
        </Info>
      </Content>
    </Header>
  );
};

export default AdminRoomHeader;
