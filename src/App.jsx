import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}
