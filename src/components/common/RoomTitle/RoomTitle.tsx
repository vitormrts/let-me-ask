import React from 'react';
import { useRoom } from 'src/hooks';
import { Container, LengthQuestions, Title } from './RoomTitle.style';

type RoomTitleProps = {
  roomId: string;
};

const RoomTitle: React.FC<RoomTitleProps> = ({ roomId }) => {
  const { title, questions } = useRoom(roomId);
  return (
    <Container>
      <Title>{title}</Title>
      {questions.length > 0 && (
        <LengthQuestions>{questions.length} questions</LengthQuestions>
      )}
    </Container>
  );
};

export default RoomTitle;
