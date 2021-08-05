import React from 'react';
import { Aside, AuthContainer } from 'src/components/common';
import { CreateNewRoom } from 'src/components/newRoom';

const NewRoom: React.FC = () => (
  <AuthContainer>
    <Aside />
    <CreateNewRoom />
  </AuthContainer>
);

export default NewRoom;
