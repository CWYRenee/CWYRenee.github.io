import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Profile from './components/Feed/Profile';
import Projects from './components/Feed/Projects';

function App() {
  return (
    <div className="app">
    <Header />
    <Profile />
    <Projects />
    </div>
  );
}

export default App;