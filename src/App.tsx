import Navbar from "./components/Navbar";
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
      <h1 className="font-body text-heading-1">hi</h1>
      <h1 className="font-heading">hi</h1>
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
