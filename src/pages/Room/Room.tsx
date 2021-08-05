import React from 'react';
import { useParams } from 'react-router';
import { RoomTitle } from 'src/components/common';
import { FormQuestion, Questions, RoomHeader } from 'src/components/room';

type RoomParams = {
  id: string;
};

const Room: React.FC = () => {
  const { id: roomId } = useParams<RoomParams>();

  return (
    <>
      <RoomHeader roomId={roomId} />
      <RoomTitle roomId={roomId} />
      <FormQuestion roomId={roomId} />
      <Questions roomId={roomId} />
    </>
  );
};

export default Room;
