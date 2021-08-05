import React from 'react';
import { Aside, AuthContainer } from 'src/components/common';
import { Auth } from 'src/components/home';

const Home: React.FC = () => (
  <AuthContainer>
    <Aside />
    <Auth />
  </AuthContainer>
);

export default Home;
