import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Button, RoomCode, SwitcherTheme } from 'src/components/common';
import { LogoDarkIcon, LogoLightIcon } from 'src/components/common/Icons';
import { useAuth, useRoom, useRoomId } from 'src/hooks';
import { useTheme } from 'styled-components';
import {
  Content,
  Header,
  LogoWrapper,
  SeeAdminPanel
} from './RoomHeader.style';

const RoomHeader: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { user } = useAuth();
  const history = useHistory();
  const roomId = useRoomId();
  const { authorId } = useRoom(roomId);
  const theme = useTheme();

  const LogoIcon = theme.title === 'light' ? LogoLightIcon : LogoDarkIcon;

  useEffect(() => {
    setIsAdmin(user?.id === authorId);
  }, [user, authorId]);

  return (
    <Header>
      <Content>
        <LogoWrapper>
          <LogoIcon />
          <SwitcherTheme />
        </LogoWrapper>
        {isAdmin && (
          <SeeAdminPanel>
            <Button onClick={() => history.push(`/admin/rooms/${roomId}`)}>
              See Admin panel
            </Button>
          </SeeAdminPanel>
        )}
        <RoomCode code={roomId} />
      </Content>
    </Header>
  );
};

export default RoomHeader;
