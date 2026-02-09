import { createContext, useContext } from 'react';

export const UserContext = createContext();

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) throw new Error('UserContext should be used only inside UserProvider');
  return context;
}
