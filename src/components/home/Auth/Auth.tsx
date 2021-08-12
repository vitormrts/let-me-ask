import React, { FormEvent, useState } from 'react';
import { useAuth } from 'src/hooks';
import { useHistory } from 'react-router';
import { database } from 'src/services/firebase';
import { Button, LogoImage, SwitcherTheme } from 'src/components/common';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleIcon } from 'src/components/common/Icons';
import {
  Authentication,
  Content,
  Form,
  CodeInput,
  CreateRoom,
  Separator,
  AuthHeader,
  AllRoomsButton,
  AllRooms
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
      toast.error('Enter some room code.');
      return;
    }

    const roomRef = await database.ref(`/rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      toast.error("This room doesn't exist.");
      return;
    }

    if (roomRef.val().endedAt) {
      toast.error('This room has been closed.');
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
          <GoogleIcon />
          Create your room with Google
        </CreateRoom>
        <Separator>or enter an existent room</Separator>
        <Form onSubmit={handleJoinRoom}>
          <CodeInput
            type="text"
            placeholder="Enter the room code"
            onChange={event => setRoomCode(event.target.value)}
            value={roomCode}
          />
          <Button type="submit">Enter the room</Button>
        </Form>
        <AllRooms>
          Do you want see all rooms?
          <AllRoomsButton onClick={() => history.push('/rooms')}>
            click here
          </AllRoomsButton>
        </AllRooms>
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
    </Authentication>
  );
};

export default Auth;
