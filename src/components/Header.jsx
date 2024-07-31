import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Header.css';

function Header() {
  const { user } = useContext(AuthContext);

  return (
    <header className="App-header">
      <h1>CryptoDash</h1>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        {user ? (
          <Link to="/profile">Profile</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;