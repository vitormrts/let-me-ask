import 'src/styles/room.scss';
import { useHistory, useParams } from 'react-router';
import LogoImg from 'src/assets/icons/logo.svg';
import DeleteImg from 'src/assets/icons/delete.svg';
import { Button, Question, RoomCode } from 'src/components/common';
import { useRoom } from 'src/hooks';
import { database } from 'src/services/firebase';

type RoomParams = {
  id: string;
}

const AdminRoom = () => {
  const history = useHistory();
  const { id: roomId } = useParams<RoomParams>();
  const { title, questions } = useRoom(roomId); 

  const handleEndRoom = async () => {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    })

    history.push('/');
  }

  const handleDeleteQuestion = async (questionId: string) => {
    if (window.confirm('Tem certeza que você dseja excluir essa pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }
  
  const questionsMap = questions.map(question => {
    const { id, author, content } = question;
    return (
      <Question 
        key={id}
        content={content}
        author={author}
      >
        <button
          type="button"
          onClick={() => handleDeleteQuestion(question.id)}
        >
          <img src={DeleteImg} alt="Remover pergunta"/>
        </button>
      </Question>
    )
  })

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={LogoImg} alt="Letmeask"/>
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>
          </div>
        </div>
      </header>
      <main className="content">
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>4 perguntas</span>}
        </div>
        <div className="question-list">
          {questionsMap}
        </div>
      </main>
    </div>
  )
}

export default AdminRoom;