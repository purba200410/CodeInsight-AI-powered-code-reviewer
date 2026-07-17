import {
  createContext,
  useEffect,
  useState,
} from "react";

import type { ReactNode } from "react";
import type { User } from "../types/auth";
import { getProfile } from "../services/auth.service";
import {
  saveToken,
  removeToken,
  getToken,
} from "../utils/token";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
}

export const AuthContext =
  createContext<AuthContextType>(
    {} as AuthContextType
  );

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const init = async () => {
      const hasToken = !!getToken();

      try {
        if (!hasToken) {
          setLoading(false);
          return;
        }

        const res = await getProfile();

        setUser(res.user);
      } catch {
        removeToken();
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  const login = (token: string, user: User) => {
    saveToken(token);
    setUser(user);
  };

  const logout = () => {
    removeToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
