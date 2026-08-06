import { useEffect, useState, lazy, Suspense } from "react";

import Loader from "./components/Loader/Loader";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import Navbar from "./components/Navbar/Navbar";

// Load Hero immediately
import Hero from "./components/Hero/Hero";

// Lazy load the remaining sections
const Counter = lazy(() => import("./components/Counter/Counter"));
const About = lazy(() => import("./components/About/About"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Certificates = lazy(() => import("./components/Certificates/Certificates"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ParticlesBackground />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />

        <Suspense fallback={<div />}>
          <Counter />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Experience />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;