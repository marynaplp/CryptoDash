import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import CryptoTable from './Cryptotable';

function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <CryptoTable />
    </div>
  );
}

export default Profile;
