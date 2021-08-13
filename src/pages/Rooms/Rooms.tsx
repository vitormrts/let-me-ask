import React from 'react';
import { Breadcrumbs } from 'src/components/common';
import { RoomsHeader, RoomList } from 'src/components/rooms';

const Rooms: React.FC = () => {
  return (
    <>
      <RoomsHeader />
      <Breadcrumbs page="Rooms" />
      <RoomList />
    </>
  );
};

export default Rooms;
