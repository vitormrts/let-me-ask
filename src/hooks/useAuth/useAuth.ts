import { useContext } from 'react';
import {
  AuthContext,
  AuthContextType
} from 'src/contexts/AuthContext/AuthContext';

const useAuth = (): AuthContextType => useContext(AuthContext);

export default useAuth;
