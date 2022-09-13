import React from 'react';
import { createContext, useState, useEffect, useContext } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import authService from '@core/services/authService';
import cookie from 'react-cookies';

interface IAuthContextInterface {
    isLoggingIn: boolean;
    initialized: boolean;
    login: (username, password) => Promise<any>;
    logout: () => Promise<any>;
    auth?: IInitialAuthState;
  }

const AuthContext = createContext({} as IAuthContextInterface);

export interface IInitialAuthState {
  accessToken?: string;
  isAuthenticated?: boolean;
  profile?: any;
  pkhid?: string;
}

export const initialAuthState: IInitialAuthState = {
  isAuthenticated: false,
};

const AuthProvider = ({ children }) => {
  const [initialized, setInitialized] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [auth, setAuth] = useState(initialAuthState);

  const navigate = useNavigate();

  const login = async (username, password) => {
    const payload = {
      username,
      password,
      client_id: 'tdemr_client',
      grant_type: 'multi_facility',
      facility_code: 'axon',
    };
    console.log('====>vô login', payload)
    const authData = await authService.getToken(payload);
    if (authData) {
      setAuth(authData);
      setIsLoggingIn(true);
      //getProvider
      const provider = await authService.getProvider({ pkhidString: authData.pkhid });
      console.log('provider=====>', provider);
      navigate('/');
    }
  };

  const logout = async () => {
    authService.signOut();
  };

  const initContext = () => {
    const authData = cookie.load('AUTH_DATA');
    if (authData) {
      const { exp }: any = jwt_decode(authData.accessToken);
      const currentTime = new Date().getTime() / 1000;
      const isExpired = currentTime > exp - 30;
      if (isExpired) {
        setInitialized(true);
        setIsLoggingIn(false);
        setAuth(initialAuthState);
      } else {
        setInitialized(true);
        setIsLoggingIn(true);
        setAuth(authData);
      }
    } else {
      setInitialized(true);
      setIsLoggingIn(false);
      setAuth(initialAuthState);
    }
  };

  useEffect(() => {
    initContext();
  }, []);

  const exportedValues: IAuthContextInterface = {
    initialized,
    auth,
    login,
    logout,
    isLoggingIn,
  };

  return <AuthContext.Provider value={exportedValues}>{children}</AuthContext.Provider>;
};


export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
