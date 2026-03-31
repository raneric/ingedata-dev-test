import { useEffect, useState } from 'react';
import { UserContext } from './useUserContext';
import { AppPath } from '../utils/appConstant';
import api from '../api/api';
import { parseJwt } from '../utils/jwtDecoder';
import { setAccessToken } from '../services/authServices';

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const restoreSession = async () => {
      try {
        const response = await api.post(AppPath.auth.refresh);
        setAccessToken(response.data.accessToken);
        setUserInfoFromToken(response.data.accessToken);
      } catch {
        setUser(null);
      }
    };

    restoreSession();
  }, []);

  const login = async (userCredentials) => {
    try {
      const response = await api.post(AppPath.auth.login, userCredentials);
      setAccessToken(response.data.token);
      return setUserInfoFromToken(response.data.token);
    } catch (error) {
      return {
        success: false,
        message: error.response.data.message ?? error.message,
      };
    }
  };

  const setUserInfoFromToken = (token) => {
    if (token) {
      const userInfo = parseJwt(token);
      setUser(userInfo);
      return {
        success: true,
        data: userInfo,
      };
    }

    return {
      success: false,
      data: {},
    };
  };

  return (
    <UserContext.Provider value={{ user, isAuthenticated: !!user, login }}>
      {children}
    </UserContext.Provider>
  );
}
