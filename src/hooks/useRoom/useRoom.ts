import { useEffect, useState } from 'react';
import { database } from 'src/services/firebase';
import { useAuth } from 'src/hooks';

type QuestionType = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likeCount: number;
  likeId: string | undefined;
};

type RoomType = {
  title: string;
  questions: Array<QuestionType>;
};

type FirebaseQuestions = Record<
  string,
  {
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
    likes: Record<
      string,
      {
        authorId: string;
      }
    >;
  }
>;

const useRoom = (roomId: string): RoomType => {
  const { user } = useAuth();
  const [room, setRoom] = useState<RoomType>({
    title: '',
    questions: []
  });

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on('value', ref => {
      const databaseRoom = ref.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions;

      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          const { author, content, isAnswered, isHighlighted } = value;
          return {
            id: key,
            content,
            author,
            isHighlighted,
            isAnswered,
            likeCount: Object.values(value.likes ?? {}).length,
            likeId: Object.entries(value.likes ?? {}).find(
              ([, like]) => like.authorId === user?.id
            )?.[0]
          };
        }
      );

      const newRoom: RoomType = {
        title: databaseRoom.title ?? '',
        questions: parsedQuestions ?? []
      };

      setRoom(newRoom);
    });

    return () => {
      roomRef.off('value');
    };
  }, [roomId, user?.id]);

  return room;
};

export default useRoom;
