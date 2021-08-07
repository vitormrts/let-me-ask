import React from 'react';
import { Button, RoomCode, SwitcherTheme } from 'src/components/common';
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
  const history = useHistory();
  const theme = useTheme();

  const image = theme.title === 'light' ? IconLogoLight : IconLogoDark;

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
          <Logo src={image} alt="Letmeask" />
          <SwitcherTheme />
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
