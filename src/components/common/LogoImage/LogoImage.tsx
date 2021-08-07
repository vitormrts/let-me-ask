import React from 'react';
import { useTheme } from 'styled-components';
import IconLogoLight from 'src/assets/icons/logo-light.svg';
import IconLogoDark from 'src/assets/icons/logo-dark.svg';
import { Image, ImageWrapper } from './LogoImage.style';

const LogoImage: React.FC = () => {
  const theme = useTheme();

  const image = theme.title === 'light' ? IconLogoLight : IconLogoDark;

  return (
    <ImageWrapper>
      <Image src={image} />
    </ImageWrapper>
  );
};

export default LogoImage;
