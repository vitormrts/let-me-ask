import React from 'react';
import { useRoom, useRoomId } from 'src/hooks';
import { Container, Content, LengthQuestions, Title } from './RoomTitle.style';

const RoomTitle: React.FC = () => {
  const roomId = useRoomId();
  const { title, questions, isLoading } = useRoom(roomId);

  return (
    <Container>
      <Content>
        <Title>
          {isLoading && ` Loading...`}
          {title}
        </Title>
        {questions.length > 0 && (
          <LengthQuestions>{questions.length} questions</LengthQuestions>
        )}
      </Content>
    </Container>
  );
};

export default RoomTitle;
