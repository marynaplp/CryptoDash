import React, { useState, createContext } from 'react'; // Correct imports
import axios from 'axios';

export const AuthContext = createContext(); // Create the AuthContext

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize user state

  const signup = async (username, email, password) => {
    try {
      const response = await axios.post('http://localhost:5001/users/signup', {
        username,
        email,
        password,
      });
      setUser(response.data); // Set user data after signup
    } catch (error) {
      console.error('Signup error:', error);
      throw error; // Rethrow error to be handled by calling component
    }
  };

  const login = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:5001/users/login', {
        username,
        password,
      });
      setUser(response.data); // Set user data after login
    } catch (error) {
      console.error('Login error:', error);
      throw error; // Rethrow error to be handled by calling component
    }
  };

  const logout = () => {
    setUser(null); // Clear user data on logout
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
