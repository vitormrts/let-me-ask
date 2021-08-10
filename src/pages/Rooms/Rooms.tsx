import React from 'react';
import { RoomsHeader, RoomList } from 'src/components/rooms';

const Rooms: React.FC = () => {
  return (
    <>
      <RoomsHeader />
      <RoomList />
    </>
  );
};

export default Rooms;
