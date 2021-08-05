import React, { FormEvent, useState } from 'react';
import { Button } from 'src/components/common';
import { useAuth } from 'src/hooks';
import { database } from 'src/services/firebase';
import {
  Form,
  FormFooter,
  IconAvatar,
  Login,
  Name,
  SendQuestion,
  TextArea,
  UserInfo
} from './FormQuestion.style';

type FormQuestionProps = {
  roomId: string;
};

const FormQuestion: React.FC<FormQuestionProps> = ({ roomId }) => {
  const [newQuestion, setNewQuestion] = useState('');
  const { user } = useAuth();

  const handleSendQuestion = async (event: FormEvent) => {
    event.preventDefault();

    if (newQuestion.trim() === '') {
      return;
    }

    if (!user) {
      throw new Error('You must be logged in');
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar
      },
      isHighlighted: false,
      isAnswered: false
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);
    setNewQuestion('');
  };

  return (
    <Form onSubmit={handleSendQuestion}>
      <TextArea
        placeholder="O que você quer perguntar?"
        onChange={event => setNewQuestion(event.target.value)}
        value={newQuestion}
      />
      <FormFooter className="form-footer">
        {user ? (
          <UserInfo className="user-info">
            <IconAvatar src={user.avatar} alt={user.name} />
            <Name>{user.name}</Name>
          </UserInfo>
        ) : (
          <SendQuestion>
            Para enviar uma pergunta,
            <Login>faça seu login</Login>
          </SendQuestion>
        )}
        <Button type="submit" disabled={!user}>
          Enviar pergunta
        </Button>
      </FormFooter>
    </Form>
  );
};

export default FormQuestion;
