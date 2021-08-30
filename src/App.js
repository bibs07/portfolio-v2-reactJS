import React from "react";
import "./App.css";
//importing components
import { Nav } from "./components/section/Nav";
import { About } from "./components/section/About";
import { Skills } from "./components/section/Skills";
import { Image } from "./components/section/Image";
import { Projects } from "./components/section/Projects";
import { Footer } from "./components/section/Footer";

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="app__container">
        <About />
        <Skills />
        <Image />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
