// context/AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSignupVisible, setSignupVisible] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, isSignupVisible, setSignupVisible }}>
      {children}
    </AuthContext.Provider>
  );
};
