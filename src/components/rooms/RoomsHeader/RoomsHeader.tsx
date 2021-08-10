import React from 'react';
import IconLogoLight from 'src/assets/icons/logo-light.svg';
import IconLogoDark from 'src/assets/icons/logo-dark.svg';
import { SwitcherTheme } from 'src/components/common';
import { useTheme } from 'styled-components';
import { Content, Header, Logo, LogoWrapper } from './RoomsHeader.style';

const RoomsHeader: React.FC = () => {
  const theme = useTheme();

  const image = theme.title === 'light' ? IconLogoLight : IconLogoDark;

  return (
    <Header>
      <Content>
        <LogoWrapper>
          <Logo src={image} alt="Letmeask" />
          <SwitcherTheme />
        </LogoWrapper>
      </Content>
    </Header>
  );
};

export default RoomsHeader;
