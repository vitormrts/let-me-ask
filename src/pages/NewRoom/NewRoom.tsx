import IllustrationIcon from 'src/assets/icons/illustration.svg';
import LogoIcon from 'src/assets/icons/logo.svg';
import 'src/styles/auth.scss';
import { database } from 'src/services/firebase';
import { Button } from 'src/components/common';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from 'src/hooks';
import React, { FormEvent, useState } from 'react';

const NewRoom: React.FC = () => {
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
          <h2>Criar uma nova sala</h2>
          <form onSubmit={event => handleCreateRoom(event)}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Que entrar em uma sala existente? <Link to="/"> clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default NewRoom;
