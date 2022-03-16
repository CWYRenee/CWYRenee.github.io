import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Profile from './components/Feed/Profile';
import Projects from './components/Feed/Projects';
import Education from './components/Feed/Education';
import Experience from './components/Feed/Experience';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
    <Header />
    <Profile />
    <Experience />
    <Projects />
    <Education />
    <Footer />
    </div>
  );
}

export default App;