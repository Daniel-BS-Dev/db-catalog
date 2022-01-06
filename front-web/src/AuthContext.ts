import { TokenData } from 'util/request';
import { createContext } from 'react';
import { appendFile } from 'fs';

//criando um contexto global para meu nav se comunicar com o login e mudar automatico

export type AuthContextData = {
  isAuthenticated: boolean;
  token?: TokenData;
};

export type AuthContextType = {
  authContextData: AuthContextData;
  setAuthContextData: (authContextData: AuthContextData) => void;
};

export const AuthContext = createContext<AuthContextType>({
    authContextData: {
        isAuthenticated: false,
    },
    setAuthContextData: () => null,
});

//criado o contexto vou no meu app.tsx