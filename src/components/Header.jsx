// File: src/components/Header.js
import React, { useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import useOutsideClick from '../hooks/useOutsideClick';
import './Header.css';

function Header() {
  const { user, logout } = useContext(AuthContext);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  useOutsideClick(dropdownRef, () => setDropdownVisible(false));

  const handleAvatarClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    logout();
    setDropdownVisible(false);
  };

  return (
    <header className="header">
      <div className="nav-left">
        <Link to="/">Home</Link>
      </div>
      <div className="nav-right">
        {user ? (
          <>
            <Link to="/profile">Profile</Link>
            <div className="user-avatar" onClick={handleAvatarClick}>
              <div className="avatar-circle">{user.username[0]}</div>
              {dropdownVisible && (
                <div ref={dropdownRef} className="dropdown-menu">
                  <Link to="/profile">Profile</Link>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
