import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Profile from './components/Feed/Profile';
import Projects from './components/Feed/Projects';
import Education from './components/Feed/Education';
import Experience from './components/Feed/Experience';

function App() {
  return (
    <div className="app">
    <Header />
    <Profile />
    <Experience />
    <Projects />
    <Education />
    </div>
  );
}

export default App;