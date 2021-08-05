import React from 'react';
import IconLogo from 'src/assets/icons/logo.svg';
import { RoomCode } from 'src/components/common';
import { Content, Header, Logo, LogoWrapper } from './RoomHeader.style';

type RoomHeaderProps = {
  roomId: string;
};

const RoomHeader: React.FC<RoomHeaderProps> = ({ roomId }) => (
  <Header>
    <Content>
      <LogoWrapper>
        <Logo src={IconLogo} alt="Letmeask" />
      </LogoWrapper>
      <RoomCode code={roomId} />
    </Content>
  </Header>
);

export default RoomHeader;
