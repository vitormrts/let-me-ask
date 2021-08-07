import React, { FormEvent, useState } from 'react';
import { Button } from 'src/components/common';
import { useAuth } from 'src/hooks';
import { database } from 'src/services/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      toast.error('Enter any question');
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
        placeholder="What do you want to ask?"
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
            To submit a question,
            <Login>login</Login>
          </SendQuestion>
        )}
        <Button type="submit" disabled={!user}>
          Submit question
        </Button>
      </FormFooter>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Form>
  );
};

export default FormQuestion;
