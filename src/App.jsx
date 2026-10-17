
import { useEffect, useState, lazy, Suspense } from "react";

import Loader from "./components/Loader/Loader";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import LazySection from "./components/LazySection";

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

function SectionFallback() {
  return (
    <div
      className="section-loading-placeholder"
      aria-hidden="true"
    />
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [showParticles, setShowParticles] = useState(false);

  // Preserve the 2.5-second intro loader.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => window.clearTimeout(timer);
  }, []);

  // Load decorative particles after the intro.
  useEffect(() => {
    if (loading) return;

    const timer = window.setTimeout(() => {
      setShowParticles(true);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [loading]);

  return (
    <>
      {loading && <Loader />}

      <ScrollProgress />
      <Navbar />

      <main>
        {/* Keep the hero available immediately. */}
        <Hero />

        <LazySection>
          <Suspense fallback={<SectionFallback />}>
            <Counter />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SectionFallback />}>
            <About />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SectionFallback />}>
            <Skills />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SectionFallback />}>
            <Projects />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SectionFallback />}>
            <Certificates />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SectionFallback />}>
            <Experience />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SectionFallback />}>
            <Contact />
          </Suspense>
        </LazySection>
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
