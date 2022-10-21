import React, { createContext, useState, Dispatch, SetStateAction, useContext, ReactNode } from 'react';

import { User } from '../types';

interface UserContextInterface {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
};

interface GlobalLayoutProps {
  children: ReactNode;
};

const initialState = {
  id: '', first_name: '', last_name: '', type: [''], username: '', nfts_owned: [''], token: ''
};

const UserContext = createContext<UserContextInterface | null>({} as UserContextInterface);

const UserProvider = ({ children }: GlobalLayoutProps) => {
  const [user, setUser] = useState(initialState);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
export const useUser = () => useContext(UserContext);