import { useRef } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import { motion, useScroll, useTransform, useInView } from "motion/react";

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
  const { scrollYProgress } = useScroll();
  const x_main_title = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const x_minor_title = useTransform(scrollYProgress, [0, 1], [0, 1000]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className="noise-overlay"></div>
      <NavBar />
      <Section
        // background={FigureEight}
        id={"home"}
        customStyles={{ height: "150vh" }}
      >
        <div className="hero-content">
          <div className="hero-container">
            <motion.h1
              className="title-text"
              style={{ x: x_main_title }}
              ref={ref}
              initial={{ opacity: 0, y: 10 }} // Start invisible & off-screen right
              animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Robel T. Sebsibe
            </motion.h1>
            <h2 className="title-text-aka">
              {/* <span>aka</span> */}
              <motion.span
                data-text="Dotphic"
                className="title-text-comic"
                style={{ x: x_minor_title }}
                ref={ref}
                initial={{ opacity: 0, x: 100 }} // Start invisible & off-screen right
                animate={isInView ? { opacity: 1, x: 0 } : {}} // Animate when in view
                transition={{ duration: 5, ease: "easeOut" }}
              >
                Dotphic
              </motion.span>
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
