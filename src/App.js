import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FooterLinks from "./components/FooterLinks";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <FooterLinks />
      <Footer />
    </>
  );
}

export default App;
