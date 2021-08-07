import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, LogoImage, SwitcherTheme } from 'src/components/common';
import { useAuth } from 'src/hooks';
import { database } from 'src/services/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  Title,
  Form,
  CodeInput,
  Content,
  Enter,
  CreateRoomHeader
} from './CreateNewRoom.style';

const CreateNewRoom: React.FC = () => {
  const { user } = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState('');

  const handleCreateRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (newRoom.trim() === '') {
      toast.error('Enter a name for the room.');
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
        <CreateRoomHeader>
          <LogoImage />
          <SwitcherTheme />
        </CreateRoomHeader>
        <Title>Create a new room</Title>
        <Form onSubmit={event => handleCreateRoom(event)}>
          <CodeInput
            type="text"
            placeholder="Room name"
            onChange={event => setNewRoom(event.target.value)}
            value={newRoom}
          />
          <Button type="submit">Create room</Button>
        </Form>
        <Enter>
          To enter an existing room, <Link to="/">click here</Link>
        </Enter>
      </Content>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
};

export default CreateNewRoom;
