import api from '@/services/api';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { setCookie, destroyCookie } from 'nookies';
import { createContext, ReactNode } from 'react';

interface IAuthProvider {
  children: ReactNode;
}


interface ISignInCredentials {
  username: string;
  password: string;
}

interface IAuthContext {
  signIn(credentials: ISignInCredentials): Promise<void>;
  signOut(): void;
}

export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: IAuthProvider) {
  const router = useRouter();

  const signIn = async ({ username, password }: ISignInCredentials) => {
    const sessionUser = new Promise<void>(async (resolve, reject) => {
      try {
        // pegar o token do usuário
        const sessionResponse = await api.post('session', {
          username,
          password,
        });
        const { token } = sessionResponse.data;
        // salvar o cookie (Token JWT) no browser
        setCookie(undefined, 'backend.token', token, {
          maxAge: 60 * 60 * 24 * 30, // 30 days
          path: '/',
        });
        // redirecionar para home
        router.push('/home');
        resolve();
      } catch (e) {
        const err = e as AxiosError;
        reject(err);
      }
    });
    return sessionUser;
  }

  const signOut = () => {
    destroyCookie(undefined, 'backend.token');
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}