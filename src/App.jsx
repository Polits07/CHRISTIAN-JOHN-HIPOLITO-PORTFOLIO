import NAVBAR from "./components/NAVBAR";
import HOME from "./components/HOME";
import ABOUT from "./components/ABOUT";
import SKILLS from "./components/SKILLS";
import EXPERIENCE from "./components/EXPERIENCE";
import PROJECTS from "./components/PROJECTS";
import CERTIFICATIONS from "./components/CERTIFICATIONS";
import CONTACT from "./components/CONTACT";
import FOOTER from "./components/FOOTER";

function App() {
  return (
    <>
      <NAVBAR />
      <main>
        <HOME />
        <ABOUT />
        <SKILLS />
        <EXPERIENCE />
        <PROJECTS />
        <CERTIFICATIONS />
        <CONTACT />
      </main>
      <FOOTER />
    </>
  );
}

export default App;