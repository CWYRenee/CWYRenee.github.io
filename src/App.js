import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Profile from './components/Feed/Profile';

function App() {
  return (
    <div className="app">
    <Header />
    <Profile />
    </div>
  );
}

export default App;