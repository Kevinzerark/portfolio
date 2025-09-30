import Contact from "./components/contact/Contact.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Hero from "./components/hero/Hero.jsx";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills.jsx";
import Topbar from "./components/topbar/Topbar";
import ParticlesBackground from "./components/particles/ParticlesBackground.jsx";



const App = () => {
  return (
    <>
      <ParticlesBackground />
      <Topbar />
      <Header />
      <Hero />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
