import Navbar from './components/General/Navbar';
import Connect from './pages/Connect';
import Experience from './pages/Experience';
import Landing from './pages/Landing';
import Leader from './pages/Leader';
import TeamPlayer from './pages/TeamPlayer';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Experience />
      <Leader />
      <TeamPlayer />
      <Skills />
      <Projects />
      <Connect />
    </>
  );
}

export default App;
