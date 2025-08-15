import Navbar from "./components/General/Navbar";
import Connect from "./pages/Connect";
import Experience from "./pages/Experience";
import Landing from "./pages/Landing";
import LeaderTeamPlayer from "./pages/LeaderTeamPlayer";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Experience />
      <LeaderTeamPlayer />
      <Skills />
      <Projects />
      <Connect />
    </>
  );
}

export default App;
