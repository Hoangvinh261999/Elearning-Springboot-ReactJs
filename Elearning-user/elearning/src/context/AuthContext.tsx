import React, { useState, useEffect, createContext, useContext } from 'react';
import { User } from '../interfaces/LoginDatas';
import { jwtDecode } from 'jwt-decode';

interface AuthContextProps {
  user: User | null;
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
  
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const login = (token: string) => {
    const decodedToken: any = jwtDecode(token);
    const userData: User = {
      username: decodedToken.sub,
      userId: decodedToken.usId,
      roles: decodedToken.scope,
      issuedAt: decodedToken.iat,
      expiresAt: decodedToken.exp,
    };
    setUser(userData);
    setIsLoggedIn(true); // Cập nhật trạng thái đăng nhập
    localStorage.setItem('loginToken', token);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false); // Cập nhật trạng thái đăng xuất
    localStorage.removeItem('loginToken');
    localStorage.removeItem('user');
  };

  // Theo dõi sự thay đổi của user và cập nhật trạng thái đăng nhập
  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    localStorage.setItem('user', JSON.stringify(user)); // Cập nhật user vào localStorage
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
