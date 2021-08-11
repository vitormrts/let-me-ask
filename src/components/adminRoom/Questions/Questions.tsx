import React, { useState } from 'react';
import { ModalDelete, Question } from 'src/components/common';
import { useRoom } from 'src/hooks';
import { database } from 'src/services/firebase';
import DeleteImg from 'src/assets/icons/delete.svg';
import CheckImg from 'src/assets/icons/check.svg';
import AnswerImg from 'src/assets/icons/answer.svg';
import { Button, Container, Image, QuestionList } from './Questions.style';

type QuestionsProps = {
  roomId: string;
};

const Questions: React.FC<QuestionsProps> = ({ roomId }) => {
  const [questionId, setQuestionId] = useState('');
  const [modalActive, setModalActive] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const { questions } = useRoom(roomId);

  const handleDeleteQuestion = async () => {
    setModalActive(false);
    setQuestionId('');
    setModalTitle('');
    setModalMessage('');
    await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
  };

  const handleOpenModal = (id: string) => {
    setQuestionId(id);
    setModalTitle('Delete Question');
    setModalMessage(
      'Do you really want to delete this question? It cannot be retrieved'
    );
    setModalActive(true);
  };

  const handleCancelQuestion = () => {
    setModalActive(false);
  };

  const handleCheckQuestionAsAnwered = async (id: string) => {
    await database.ref(`rooms/${roomId}/questions/${id}`).update({
      isAnswered: true
    });
  };

  const handleHighlightQuestion = async (id: string) => {
    await database.ref(`rooms/${roomId}/questions/${id}`).update({
      isHighlighted: true
    });
  };

  const questionsMap = questions.map(question => {
    const { id, author, isAnswered, isHighlighted, content } = question;
    return (
      <Question
        key={id}
        content={content}
        author={author}
        isAnswered={isAnswered}
        isHighlighted={isHighlighted}
      >
        {!isAnswered && (
          <>
            <Button
              type="button"
              onClick={() => handleCheckQuestionAsAnwered(question.id)}
            >
              <Image src={CheckImg} alt="Mark question as answered" />
            </Button>
            <Button
              type="button"
              onClick={() => handleHighlightQuestion(question.id)}
            >
              <Image src={AnswerImg} alt="Highlight the question" />
            </Button>
          </>
        )}
        <Button type="button" onClick={() => handleOpenModal(question.id)}>
          <Image src={DeleteImg} alt="Delete question" />
        </Button>
      </Question>
    );
  });

  return (
    <Container>
      <ModalDelete
        active={modalActive}
        title={modalTitle}
        message={modalMessage}
        handleCancel={handleCancelQuestion}
        handleDelete={handleDeleteQuestion}
      />
      <QuestionList>{questionsMap}</QuestionList>
    </Container>
  );
};

export default Questions;
