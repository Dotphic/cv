import "./App.css";
import NavBar from "./components/NavBar";
import Section from "./components/atomic/Section";

// Images
import FigureOne from "./assets/backgrounds/Figure-01.jpg";
import FigureTwo from "./assets/backgrounds/Figure-02.jpg";
import FigureThree from "./assets/backgrounds/Figure-03.jpg";
import FigureFour from "./assets/backgrounds/Figure-04.jpg";
import FigureFive from "./assets/backgrounds/Figure-05.jpg";
import FigureSix from "./assets/backgrounds/Figure-06.jpg";
import FigureSeven from "./assets/backgrounds/Figure-07.jpg";
import FigureEight from "./assets/backgrounds/Figure-08.jpg";
import FigureNine from "./assets/backgrounds/Figure-09.jpg";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="noise-overlay"></div>
      <NavBar />
      <Section
        // background={FigureNine}
        id={"home"}
        customStyles={{ height: "150vh" }}
      >
        <Hero />
      </Section>
      <Section background={FigureFour} id={"about"}></Section>
      <Section background={FigureSix}></Section>
      <Footer />
    </>
  );
}

export default App;
