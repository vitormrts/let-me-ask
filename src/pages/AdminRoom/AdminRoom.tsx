import React from 'react';
import { useParams } from 'react-router';
import { AdminRoomHeader, Questions } from 'src/components/adminRoom';
import { Breadcrumbs, RoomTitle } from 'src/components/common';
import { useRoom } from 'src/hooks';

type RoomParams = {
  id: string;
};

const AdminRoom: React.FC = () => {
  const { id: roomId } = useParams<RoomParams>();
  const { title } = useRoom(roomId);

  return (
    <>
      <AdminRoomHeader roomId={roomId} />
      <Breadcrumbs page={`Admin room ${title}`} />
      <RoomTitle roomId={roomId} />
      <Questions roomId={roomId} />
    </>
  );
};

export default AdminRoom;
