import React from 'react';
import { useParams } from 'react-router';
import { AdminRoomHeader, Questions } from 'src/components/adminRoom';
import { RoomTitle } from 'src/components/common';

type RoomParams = {
  id: string;
};

const AdminRoom: React.FC = () => {
  const { id: roomId } = useParams<RoomParams>();

  return (
    <>
      <AdminRoomHeader roomId={roomId} />
      <RoomTitle roomId={roomId} />
      <Questions roomId={roomId} />
    </>
  );
};

export default AdminRoom;
