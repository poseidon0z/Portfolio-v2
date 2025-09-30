import Navbar from './components/General/Navbar';
import Connect from './pages/Connect';
import Experience from './pages/Experience';
import Landing from './pages/Landing';
import Leader from './pages/Leader';
import TeamPlayer from './pages/TeamPlayer';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import ProjectArchive from './pages/ProjectArchive';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/project-archive" element={<ProjectArchive />} />
        <Route
          path="/"
          element={
            <>
              <Landing />
              <Experience />
              <Leader />
              <TeamPlayer />
              <Skills />
              <Projects />
              <Connect />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
