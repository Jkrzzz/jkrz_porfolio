import { useEffect, useState } from "react";
import ClockLoader from "react-spinners/ClockLoader";
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
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const checkDark = localStorage.getItem("selectedTheme");
  const color = checkDark === "light" ? "#123421" : "#efefef";
  return (
    <>
      {loading && (
        <div className="loading-react">
          <ClockLoader
            color={color}
            loading={loading}
            size={250}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
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
