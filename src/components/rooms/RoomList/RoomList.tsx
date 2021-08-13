import React, { useCallback, useEffect, useState } from 'react';
import { Button } from 'src/components/common';
import { database } from 'src/services/firebase';
import { useHistory } from 'react-router';
import {
  Container,
  RoomContent,
  RoomItem,
  Title,
  RoomName,
  Rooms,
  StatusOpen,
  StatusClosed,
  StatusMessage,
  Info
} from './RoomList.style';

type RoomsValues = Record<
  string,
  {
    endedAt: string;
    title: string;
  }
>;

type RoomType = {
  id: string;
  title: string;
  endedAt: string;
};

type RoomList = Array<RoomType>;

const RoomList: React.FC = () => {
  const [rooms, setRooms] = useState<RoomList>();
  const history = useHistory();

  const handleEnterRoom = (id: string) => history.push(`/rooms/${id}`);

  const getParsedRooms = useCallback((roomsValues: RoomsValues): RoomList => {
    try {
      const parsedRooms = Object.entries(roomsValues).map(([key, value]) => {
        const { endedAt, title } = value;
        return {
          id: key,
          title,
          endedAt: endedAt || ''
        };
      });
      return parsedRooms;
    } catch (error) {
      return [];
    }
  }, []);

  useEffect(() => {
    const databaseRef = database.ref('rooms');
    databaseRef.once('value', ref => {
      const roomsValues: RoomsValues = ref.val();
      setRooms(getParsedRooms(roomsValues));
    });
  }, [getParsedRooms]);

  const roomsMap = rooms?.map(({ id, title, endedAt }) => {
    const isOpen = endedAt === '';
    return (
      <RoomItem key={id} isOpen={isOpen}>
        <RoomContent>
          <RoomName>{title}</RoomName>
          <Info>
            {isOpen ? (
              <>
                <StatusOpen>
                  <StatusMessage>Open</StatusMessage>
                </StatusOpen>
                <Button onClick={() => handleEnterRoom(id)}>
                  Enter the room
                </Button>
              </>
            ) : (
              <StatusClosed>
                <StatusMessage>Closed</StatusMessage>
              </StatusClosed>
            )}
          </Info>
        </RoomContent>
      </RoomItem>
    );
  });

  return (
    <Container>
      <Title>Room list</Title>
      <Rooms>{roomsMap}</Rooms>
    </Container>
  );
};

export default RoomList;
