import { useCallback, useEffect, useState } from 'react';
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
  authorId: string;
  title: string;
  questions: Array<QuestionType>;
  isLoading: boolean;
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
    authorId: '',
    title: '',
    questions: [],
    isLoading: true
  });

  const getParsedQuestions = useCallback(
    (firebaseQuestions: FirebaseQuestions) => {
      try {
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
        return parsedQuestions;
      } catch (error) {
        return [];
      }
    },
    [user]
  );

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on('value', ref => {
      const databaseRoom = ref.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions;

      const newRoom: RoomType = {
        authorId: databaseRoom.authorId,
        title: databaseRoom.title ?? '',
        questions: getParsedQuestions(firebaseQuestions),
        isLoading: false
      };

      setRoom(newRoom);
    });

    return () => {
      roomRef.off('value');
    };
  }, [getParsedQuestions, roomId, user]);

  return room;
};

export default useRoom;
