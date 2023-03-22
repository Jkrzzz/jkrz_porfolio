import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Qualifications from "./components/qualification/Qualifications";
import ScrollUp from "./components/scrollup/ScrollUp";
import Services from "./components/services/Services";
import Skill from "./components/skills/Skill";
import Testimonials from "./components/testimonials/Testimonials";
import Work from "./components/work/Work";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skill />
        <Services />
        <Qualifications />
        <Work />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
