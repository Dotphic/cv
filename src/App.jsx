import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import testImage from "./assets/test.jpg"; // Import the image

function App() {
  return (
    <>
      <NavBar />
      <Section background={testImage}></Section>
      <Section background={testImage}></Section>
      <Section background={testImage}></Section>
    </>
  );
}

export default App;
