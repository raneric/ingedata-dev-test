import { createContext, useState } from 'react';

const initialUser = { name: '', token: '', isLoggedIn: false };
const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(initialUser);

  const login = (newUser) => {
    setUser(newUser);
  };

  const logout = () => {
    setUser(initialUser);
  };

  return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
}

function useUserContext() {
  const context = useUserContext(UserContext);
  if (context === undefined) throw new Error('UserContext should be used only inside UserProvider');
  return context;
}

export { UserProvider, useUserContext };
