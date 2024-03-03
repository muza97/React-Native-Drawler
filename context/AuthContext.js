// context/AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext({
  isSignupVisible: false, // default value
  setSignupVisible: () => {}, // default empty function
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSignupVisible, setSignupVisible] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, isSignupVisible, setSignupVisible }}>
      {children}
    </AuthContext.Provider>
  );
};
