import React from 'react';
import { RoomCode, SwitcherTheme } from 'src/components/common';
import { LogoDarkIcon, LogoLightIcon } from 'src/components/common/Icons';
import { useTheme } from 'styled-components';
import { Content, Header, LogoWrapper } from './RoomHeader.style';

type RoomHeaderProps = {
  roomId: string;
};

const RoomHeader: React.FC<RoomHeaderProps> = ({ roomId }) => {
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
