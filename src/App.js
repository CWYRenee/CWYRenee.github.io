import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Profile from './components/Feed/Profile';
import Projects from './components/Feed/Projects';
import Education from './components/Feed/Education';

function App() {
  return (
    <div className="app">
    <Header />
    <Profile />
    <Education />
    <Projects />
    </div>
  );
}

export default App;