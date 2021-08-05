import React from 'react';
import { Question } from 'src/components/common';
import { useRoom } from 'src/hooks';
import { database } from 'src/services/firebase';
import DeleteImg from 'src/assets/icons/delete.svg';
import CheckImg from 'src/assets/icons/check.svg';
import AnswerImg from 'src/assets/icons/answer.svg';
import { QuestionList } from './Questions.style';

type QuestionsProps = {
  roomId: string;
};

const Questions: React.FC<QuestionsProps> = ({ roomId }) => {
  const { questions } = useRoom(roomId);

  const handleDeleteQuestion = async (questionId: string) => {
    if (
      global.window.confirm('Tem certeza que você dseja excluir essa pergunta?')
    ) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  };

  const handleCheckQuestionAsAnwered = async (questionId: string) => {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true
    });
  };

  const handleHighlightQuestion = async (questionId: string) => {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
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
            <button
              type="button"
              onClick={() => handleCheckQuestionAsAnwered(question.id)}
            >
              <img src={CheckImg} alt="Marcar pergunta como respondida" />
            </button>
            <button
              type="button"
              onClick={() => handleHighlightQuestion(question.id)}
            >
              <img src={AnswerImg} alt="Dar destaque à pergunta" />
            </button>
          </>
        )}
        <button type="button" onClick={() => handleDeleteQuestion(question.id)}>
          <img src={DeleteImg} alt="Remover pergunta" />
        </button>
      </Question>
    );
  });

  return <QuestionList>{questionsMap}</QuestionList>;
};

export default Questions;
