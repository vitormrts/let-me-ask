import React from 'react';
import { Button, RoomCode } from 'src/components/common';
import LogoImg from 'src/assets/icons/logo.svg';
import { useHistory } from 'react-router';
import { database } from 'src/services/firebase';
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
  const history = useHistory();

  const handleEndRoom = async () => {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date()
    });

    history.push('/');
  };
  return (
    <Header>
      <Content className="content">
        <LogoWrapper>
          <Logo src={LogoImg} alt="Letmeask" />
        </LogoWrapper>
        <Info>
          <RoomCode code={roomId} />
          <Button isOutlined onClick={handleEndRoom}>
            Encerrar sala
          </Button>
        </Info>
      </Content>
    </Header>
  );
};

export default AdminRoomHeader;
