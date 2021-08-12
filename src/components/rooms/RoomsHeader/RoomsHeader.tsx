import React from 'react';
import { SwitcherTheme } from 'src/components/common';
import { LogoDarkIcon, LogoLightIcon } from 'src/components/common/Icons';
import { useTheme } from 'styled-components';
import { Content, Header, LogoWrapper } from './RoomsHeader.style';

const RoomsHeader: React.FC = () => {
  const theme = useTheme();

  const LogoIcon = theme.title === 'light' ? LogoLightIcon : LogoDarkIcon;

  return (
    <Header>
      <Content>
        <LogoWrapper>
          <LogoIcon />
          <SwitcherTheme />
        </LogoWrapper>
      </Content>
    </Header>
  );
};

export default RoomsHeader;
