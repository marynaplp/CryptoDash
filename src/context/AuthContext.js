// File: src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to handle user signup
  const signup = async (username, email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/users/signup', {
        username,
        email,
        password,
      });
      setUser(response.data);
    } catch (error) {
      console.error('Signup error:', error);
      throw error; // Rethrow error to handle it in the component
    }
  };

  // Function to handle user login (fetch user data by username)
  const login = async (username) => {
    try {
      const response = await axios.get(`http://localhost:5000/users/${username}`);
      setUser(response.data);
    } catch (error) {
      console.error('Login error:', error);
      throw error; // Rethrow error to handle it in the component
    }
  };

  // Function to log out the user
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
