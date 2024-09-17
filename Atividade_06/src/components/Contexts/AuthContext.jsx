import React, { createContext, useState, useContext, useEffect } from 'react';
import { createToken, verifyToken } from '../Jwt/Jwt'; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuthenticated] = useState();

  useEffect(() => {
    const checkAuth = async () => {
      const user = await verifyToken();
      if (user) {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true')
      } else {
        setIsAuthenticated(false);
        localStorage.setItem('isAuthenticated', 'false')
      }
    };
    checkAuth();
  }, []);

  const login = async (user) => {
    try {
      await createToken(user); 
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true')
    } catch (error) {
      alert('Erro ao fazer login JWT:', error)
      setIsAuthenticated(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token'); 
    localStorage.removeItem('isAuthenticated'); 
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext)
};
