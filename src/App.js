import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Feed/Profile';
import Projects from './components/Feed/Projects';
import Education from './components/Feed/Education';
import Experience from './components/Feed/Experience';
import About from './components/Feed/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
    <Header />
    <Profile />
    <Experience />
    <Projects />
    <Education />
    <About />
    <Footer />
    </div>
  );
}

export default App;