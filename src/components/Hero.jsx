import "./Hero.css";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const x_main_title = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const x_minor_title = useTransform(scrollYProgress, [0, 1], [0, 1000]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
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
        <button className="button-cta">Let's Talk</button>
      </div>
    </div>
  );
}
