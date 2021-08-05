import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, LogoImage } from 'src/components/common';
import { useAuth } from 'src/hooks';
import { database } from 'src/services/firebase';
import {
  Container,
  Title,
  Form,
  CodeInput,
  Content,
  Enter
} from './CreateNewRoom.style';

const CreateNewRoom: React.FC = () => {
  const { user } = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState('');

  const handleCreateRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id
    });

    history.push(`/rooms/${firebaseRoom.key}`);
  };
  return (
    <Container>
      <Content>
        <LogoImage />
        <Title>Criar uma nova sala</Title>
        <Form onSubmit={event => handleCreateRoom(event)}>
          <CodeInput
            type="text"
            placeholder="Nome da sala"
            onChange={event => setNewRoom(event.target.value)}
            value={newRoom}
          />
          <Button type="submit">Criar sala</Button>
        </Form>
        <Enter>
          Que entrar em uma sala existente? <Link to="/"> clique aqui</Link>
        </Enter>
      </Content>
    </Container>
  );
};

export default CreateNewRoom;
