import React, { FormEvent, useState } from 'react';
import GoogleIcon from 'src/assets/icons/google-icon.svg';
import { useAuth } from 'src/hooks';
import { useHistory } from 'react-router';
import { database } from 'src/services/firebase';
import { Button, LogoImage, SwitcherTheme } from 'src/components/common';
import {
  Authentication,
  Content,
  Form,
  CodeInput,
  CreateRoom,
  GoogleImage,
  Separator,
  AuthHeader
} from './Auth.style';

const Auth: React.FC = () => {
  const { user, signInWithGoogle } = useAuth();
  const history = useHistory();
  const [roomCode, setRoomCode] = useState('');

  const handleCreateRoom = async () => {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  };

  const handleJoinRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`/rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      // eslint-disable-next-line
      alert('Room does not exists.');
      return;
    }

    if (roomRef.val().endedAt) {
      // eslint-disable-next-line
      alert('Room already closed');
      return;
    }

    history.push(`/rooms/${roomCode}`);
  };

  return (
    <Authentication>
      <Content>
        <AuthHeader>
          <LogoImage />
          <SwitcherTheme />
        </AuthHeader>
        <CreateRoom onClick={handleCreateRoom} className="create-room">
          <GoogleImage src={GoogleIcon} alt="Logo do Google" />
          Crie sua sala com o Google
        </CreateRoom>
        <Separator>ou entre em uma sala</Separator>
        <Form onSubmit={handleJoinRoom}>
          <CodeInput
            type="text"
            placeholder="Digite o código da sala"
            onChange={event => setRoomCode(event.target.value)}
            value={roomCode}
          />
          <Button type="submit">Entrar na sala</Button>
        </Form>
      </Content>
    </Authentication>
  );
};

export default Auth;
