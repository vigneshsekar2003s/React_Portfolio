import { useEffect, useState, lazy, Suspense } from "react";

import Loader from "./components/Loader/Loader";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

// Lazy load heavy components
const ParticlesBackground = lazy(() =>
  import("./components/ParticlesBackground/ParticlesBackground")
);

const Counter = lazy(() => import("./components/Counter/Counter"));
const About = lazy(() => import("./components/About/About"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Certificates = lazy(() =>
  import("./components/Certificates/Certificates")
);
const Experience = lazy(() =>
  import("./components/Experience/Experience")
);
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  const [loading, setLoading] = useState(true);
  const [showParticles, setShowParticles] = useState(false);

  // Remove loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Load particles after the main page has rendered
  useEffect(() => {
    if (loading) return;

    const timer = setTimeout(() => {
      setShowParticles(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [loading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ScrollProgress />

      <Navbar />

      <main>
        <Hero />

        <Suspense fallback={null}>
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

      {showParticles && (
        <Suspense fallback={null}>
          <ParticlesBackground />
        </Suspense>
      )}
    </>
  );
}

export default App;