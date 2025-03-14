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
import FigureEight from "./assets/backgrounds/Figure-08.jpg";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="noise-overlay"></div>
      <NavBar />
      <Section
        background={FigureEight}
        id={"home"}
        customStyles={{ height: "150vh" }}
      >
        <div className="hero-content">
          <div className="hero-container">
            <h1 className="title-text">Robel T. Sebsibe</h1>
            <h2 className="title-text-aka">
              {/* <span>aka</span> */}
              <span data-text="Dotphic" className="title-text-comic">
                Dotphic
              </span>
            </h2>
            <button className="button-cta">About</button>
          </div>
        </div>
      </Section>
      <Section background={FigureFour} id={"about"}></Section>
      <Section background={FigureSix}></Section>
      <Footer />
    </>
  );
}

export default App;
