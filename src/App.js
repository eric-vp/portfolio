import './App.css';
import FrontPage from './components/FrontPage/FrontPage';
import AboutMe from './components/AboutMe/AboutMe';
import MainTechnologies from './components/MainTechnologies/MainTechnologies';
import Repositories from './components/Repositories/Repositories';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <FrontPage />
      <AboutMe />
      <MainTechnologies />
      <Repositories />
      <Contact />
    </>
  );
}

export default App;
