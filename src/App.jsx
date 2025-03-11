import "./App.css";
import NavBar from "./components/NavBar";
import Section from "./components/Section";

// Images
import FigureOne from "./assets/backgrounds/Figure-01.jpg";
import FigureTwo from "./assets/backgrounds/Figure-02.jpg";
import FigureThree from "./assets/backgrounds/Figure-03.jpg";
import FigureFour from "./assets/backgrounds/Figure-04.jpg";
import FigureFive from "./assets/backgrounds/Figure-05.jpg";
import FigureSix from "./assets/backgrounds/Figure-06.jpg";
import FigureSeven from "./assets/backgrounds/Figure-07.jpg";

function App() {
  return (
    <>
      <div className="noise-overlay"></div>
      <NavBar />
      <Section background={FigureFour}>
        <div className="hero-content">
          <h1 className="title-text">Hi, I'm Dotphic</h1>
        </div>
      </Section>
      <Section background={FigureOne}></Section>
      <Section background={FigureSix}></Section>
    </>
  );
}

export default App;
