import React from 'react';
import { Breadcrumbs, RoomTitle } from 'src/components/common';
import { FormQuestion, Questions, RoomHeader } from 'src/components/room';
import { useRoom, useRoomId } from 'src/hooks';

const Room: React.FC = () => {
  const roomId = useRoomId();
  const { title } = useRoom(roomId);

  return (
    <>
      <RoomHeader />
      <Breadcrumbs page={`Room ${title}`} />
      <RoomTitle />
      <FormQuestion />
      <Questions />
    </>
  );
};

export default Room;
