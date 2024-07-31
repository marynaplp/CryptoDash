// File: src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CryptoList from './components/CryptoList';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<CryptoList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/profile" element={<Profile user={user} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
