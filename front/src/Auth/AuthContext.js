import React, { createContext, useState, useContext , useEffect} from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Correctly initialize user state

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setIsAuthenticated(!!storedUser); // Set true if user exists
  }, []);

  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData); // Save user data in state during login
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null); // Clear user data on logout
    localStorage.removeItem("user"); // Optionally clear localStorage
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
