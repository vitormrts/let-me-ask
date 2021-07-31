import { useHistory } from 'react-router-dom';
import IllustrationIcon from 'src/assets/icons/illustration.svg';
import LogoIcon from 'src/assets/icons/logo.svg';
import GoogleIcon from 'src/assets/icons/google-icon.svg';
import 'src/styles/auth.scss';
import { Button } from 'src/components/common';
import { useAuth } from 'src/hooks';
import React, { FormEvent, useState } from 'react';
import { database } from 'src/services/firebase';

const Home: React.FC = () => {
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
    <div id="page-auth">
      <aside>
        <img
          src={IllustrationIcon}
          alt="Ilustracao simbolizando perguntas e respostas"
        />
        <strong>Crie sala de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas da sua audiencia em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={LogoIcon} alt="Letmeask" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={GoogleIcon} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Home;
