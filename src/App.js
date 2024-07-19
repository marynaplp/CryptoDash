import React from 'react';
import Header from './components/Header';
import CryptoList from './components/CryptoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <CryptoList />
    </div>
  );
}

export default App;