import React from 'react';
import {
  Buttons,
  Container,
  ContentParagraph,
  Footer,
  Image,
  Name,
  UserInfo
} from './Question.style';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

const Question: React.FC<QuestionProps> = ({
  content,
  author,
  isAnswered = false,
  isHighlighted = false,
  children
}) => (
  <Container isAnswered={isAnswered} isHighlighted={isHighlighted}>
    <ContentParagraph>{content}</ContentParagraph>
    <Footer>
      <UserInfo className="user-info">
        <Image src={author.avatar} alt={author.name} />
        <Name>{author.name}</Name>
      </UserInfo>
      <Buttons>{children}</Buttons>
    </Footer>
  </Container>
);

export default Question;
