import React from 'react';
import { Container } from './AuthContainer.style';

const AuthContainer: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default AuthContainer;
