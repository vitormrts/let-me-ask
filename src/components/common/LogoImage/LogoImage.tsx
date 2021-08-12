import React from 'react';
import { useTheme } from 'styled-components';
import { ImageWrapper } from './LogoImage.style';
import { LogoDarkIcon, LogoLightIcon } from '../Icons';

const LogoImage: React.FC = () => {
  const theme = useTheme();

  const LogoIcon = theme.title === 'light' ? LogoLightIcon : LogoDarkIcon;

  return (
    <ImageWrapper>
      <LogoIcon />
    </ImageWrapper>
  );
};

export default LogoImage;
