import React from 'react';
import './profile.css';

function Profile({ user }) {
  return (
    <div className="profile-container">
      <h1>Welcome, {user.username}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;