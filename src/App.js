import React from 'react';
import Hero from './Components/Hero/hero'
import Contact from './Components/Contact/contact'
import Projects from './Components/Projects/projects'
import './App.css';
import AboutMe from './Components/About Me/about';
import Footer from './Components/Footer/footer'

function App() {
  return (
    <>
    <Hero />
    <Contact />
    
    <Projects />
    <AboutMe />
    <Footer />
    </>
  );
}

export default App;
