import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { AdminRoomHeader, Questions } from 'src/components/adminRoom';
import { Breadcrumbs, RoomTitle } from 'src/components/common';
import { useAuth, useRoom, useRoomId } from 'src/hooks';

const AdminRoom: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const { user } = useAuth();
  const roomId = useRoomId();
  const { title, authorId } = useRoom(roomId);

  useEffect(() => {
    if (authorId !== user?.id && authorId) {
      history.push(`/rooms/${roomId}`);
      return;
    }
    setIsLoading(false);
  }, [authorId, history, roomId, user?.id]);

  return (
    <>
      {!isLoading && (
        <>
          <AdminRoomHeader />
          <Breadcrumbs page={`Admin room ${title}`} />
          <RoomTitle />
          <Questions />
        </>
      )}
    </>
  );
};

export default AdminRoom;
