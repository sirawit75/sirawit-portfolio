import Head from "next/head";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Main from "../src/components/Main";

import Navbar from "../src/components/Navbar";
import Projects from "../src/components/Projects";
import Skills from "../src/components/Skills";

export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
