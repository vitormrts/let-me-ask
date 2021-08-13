import React from 'react';
import { useParams } from 'react-router';
import { Breadcrumbs, RoomTitle } from 'src/components/common';
import { FormQuestion, Questions, RoomHeader } from 'src/components/room';
import { useRoom } from 'src/hooks';

type RoomParams = {
  id: string;
};

const Room: React.FC = () => {
  const { id: roomId } = useParams<RoomParams>();
  const { title } = useRoom(roomId);

  return (
    <>
      <RoomHeader roomId={roomId} />
      <Breadcrumbs page={`Room ${title}`} />
      <RoomTitle roomId={roomId} />
      <FormQuestion roomId={roomId} />
      <Questions roomId={roomId} />
    </>
  );
};

export default Room;
