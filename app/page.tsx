import Image from "next/image";
import Hero from "./components/hero";
import Header from "./components/header";
import StickyHeader from "./components/StickyHeader";
import Footer from "./components/Footer";
import "../lib/fontawesome";
import Contact from "./components/Contact";
import About from "./components/About";
import Stats from "./components/Stats";
import Title from "./components/Title";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <StickyHeader />
      <Hero />
      <div className="main-container gray1-bg">
        <About />
        <Stats />

        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
