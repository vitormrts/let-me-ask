import React from 'react';
import { RoomCode, SwitcherTheme } from 'src/components/common';
import { LogoDarkIcon, LogoLightIcon } from 'src/components/common/Icons';
import { useRoomId } from 'src/hooks';
import { useTheme } from 'styled-components';
import { Content, Header, LogoWrapper } from './RoomHeader.style';

const RoomHeader: React.FC = () => {
  const roomId = useRoomId();
  const theme = useTheme();

  const LogoIcon = theme.title === 'light' ? LogoLightIcon : LogoDarkIcon;

  return (
    <Header>
      <Content>
        <LogoWrapper>
          <LogoIcon />
          <SwitcherTheme />
        </LogoWrapper>
        <RoomCode code={roomId} />
      </Content>
    </Header>
  );
};

export default RoomHeader;
