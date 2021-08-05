import React from 'react';
import IllustrationIcon from 'src/assets/icons/illustration.svg';
import { Container, Image, AskQuestions, Strong } from './Aside.style';

const Aside: React.FC = () => (
  <Container>
    <Image
      src={IllustrationIcon}
      alt="Ilustracao simbolizando perguntas e respostas"
    />
    <Strong>Crie sala de Q&amp;A ao-vivo</Strong>
    <AskQuestions>Tire as duvidas da sua audiencia em tempo-real</AskQuestions>
  </Container>
);

export default Aside;
