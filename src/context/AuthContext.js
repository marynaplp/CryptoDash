// File: src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: 'JohnDoe', // Replace with dynamic user data
    favorites: [],
    cryptos: [],
  });

  // Load favorites from local storage when the app initializes
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setUser(prevUser => ({
      ...prevUser,
      favorites: savedFavorites,
    }));
  }, []);

  const setFavorites = (updatedFavorites) => {
    setUser(prevUser => ({
      ...prevUser,
      favorites: updatedFavorites,
    }));
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const login = (userData) => {
    setUser({ ...user, ...userData });
  };

  const logout = () => {
    setUser({
      username: '',
      favorites: [],
      cryptos: [],
    });
    localStorage.removeItem('favorites'); // Clear favorites on logout
  };

  return (
    <AuthContext.Provider value={{ user, setUser, setFavorites, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
