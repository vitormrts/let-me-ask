import React from 'react';
import IconLogoLight from 'src/assets/icons/logo-light.svg';
import IconLogoDark from 'src/assets/icons/logo-dark.svg';
import { RoomCode, SwitcherTheme } from 'src/components/common';
import { useTheme } from 'styled-components';
import { Content, Header, Logo, LogoWrapper } from './RoomHeader.style';

type RoomHeaderProps = {
  roomId: string;
};

const RoomHeader: React.FC<RoomHeaderProps> = ({ roomId }) => {
  const theme = useTheme();

  const image = theme.title === 'light' ? IconLogoLight : IconLogoDark;

  return (
    <Header>
      <Content>
        <LogoWrapper>
          <Logo src={image} alt="Letmeask" />
          <SwitcherTheme />
        </LogoWrapper>
        <RoomCode code={roomId} />
      </Content>
    </Header>
  );
};

export default RoomHeader;
