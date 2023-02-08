import { createContext, useContext, useState } from 'react';
import { getUser } from '../services/auth.js';

const userContext = createContext();

const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser);

  return <userContext.Provider value={{ user, setUser }}>{children}</userContext.Provider>;
};

const useUser = () => {
  const data = useContext(userContext);

  if (!data) {
    throw new Error('useUser must be wrapped in a UserProvider');
  }
  return data;
};

export { UserProvider, useUser };
