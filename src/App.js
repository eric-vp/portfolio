import { useState, useEffect } from 'react';
import './App.css';
import FrontPage from './components/FrontPage/FrontPage';
import AboutMe from './components/AboutMe/AboutMe';
import MainTechnologies from './components/MainTechnologies/MainTechnologies';
import Repositories from './components/Repositories/Repositories';
import Contact from './components/Contact/Contact';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <>
      <ThemeToggle darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <FrontPage />
      <AboutMe />
      <MainTechnologies />
      <Repositories />
      <Contact />
    </>
  );
}

export default App;
