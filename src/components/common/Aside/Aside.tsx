import React from 'react';
import IllustrationIcon from 'src/assets/icons/illustration.svg';
import { useViewport } from 'src/hooks';
import { useTheme } from 'styled-components';
import {
  Container,
  Image,
  AskQuestions,
  Strong,
  ImageWrapper
} from './Aside.style';

const Aside: React.FC = () => {
  const theme = useTheme();
  const viewport = useViewport();

  const isDesktop = viewport > theme.breakpoints.lg;

  return (
    <Container>
      {isDesktop && (
        <ImageWrapper>
          <Image
            src={IllustrationIcon}
            alt="Ilustracao simbolizando perguntas e respostas"
          />
        </ImageWrapper>
      )}
      <Strong>Crie sala de Q&amp;A ao-vivo</Strong>
      <AskQuestions>
        Tire as duvidas da sua audiencia em tempo-real
      </AskQuestions>
    </Container>
  );
};

export default Aside;
