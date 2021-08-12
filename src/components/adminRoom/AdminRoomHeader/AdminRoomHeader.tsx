import React, { useState } from 'react';
import {
  Button,
  ModalDelete,
  RoomCode,
  SwitcherTheme
} from 'src/components/common';
import { useHistory } from 'react-router';
import { database } from 'src/services/firebase';
import { useTheme } from 'styled-components';
import { LogoDarkIcon, LogoLightIcon } from 'src/components/common/Icons';
import { Content, Header, LogoWrapper, Info } from './AdminRoomHeader.style';

type AdminRoomHeaderProps = {
  roomId: string;
};

const AdminRoomHeader: React.FC<AdminRoomHeaderProps> = ({ roomId }) => {
  const [modalActive, setModalActive] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const history = useHistory();
  const theme = useTheme();

  const LogoIcon = theme.title === 'light' ? LogoLightIcon : LogoDarkIcon;

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
          <LogoIcon />
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
