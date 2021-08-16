import React from 'react';
import { AdminRoomHeader, Questions } from 'src/components/adminRoom';
import { Breadcrumbs, RoomTitle } from 'src/components/common';
import { useRoom, useRoomId } from 'src/hooks';

const AdminRoom: React.FC = () => {
  const roomId = useRoomId();
  const { title } = useRoom(roomId);

  return (
    <>
      <AdminRoomHeader />
      <Breadcrumbs page={`Admin room ${title}`} />
      <RoomTitle />
      <Questions />
    </>
  );
};

export default AdminRoom;
