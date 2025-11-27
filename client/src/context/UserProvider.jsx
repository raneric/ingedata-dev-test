import { createContext, useContext, useState } from 'react';

const initialUser = {
  name: '',
  email: '',
  isLoggedIn: false,
};
const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(initialUser);

  const saveNewUserCredentials = (newUser) => {
    setUser(newUser);
  };

  const eraseUserCredentials = () => {
    setUser(initialUser);
  };

  return (
    <UserContext.Provider value={{ user, saveNewUserCredentials, eraseUserCredentials }}>
      {children}
    </UserContext.Provider>
  );
}

function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) throw new Error('UserContext should be used only inside UserProvider');
  return context;
}

export { UserProvider, useUserContext };
