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

  // Initial loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Load third-party scripts after the main page is ready
  useEffect(() => {
    if (loading) return;

    const timer = setTimeout(() => {
      // Google Analytics
      if (!window.__analyticsLoaded) {
        window.__analyticsLoaded = true;

        const script = document.createElement("script");

        script.src =
          "https://www.googletagmanager.com/gtag/js?id=G-ZP0F7PF74H";

        script.async = true;

        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];

        window.gtag = function () {
          window.dataLayer.push(arguments);
        };

        window.gtag("js", new Date());
        window.gtag("config", "G-ZP0F7PF74H");
      }

      // Microsoft Clarity
      if (!window.__clarityLoaded) {
        window.__clarityLoaded = true;

        const script = document.createElement("script");

        script.innerHTML = `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){
              (c[a].q=c[a].q||[]).push(arguments)
            };
            t=l.createElement(r);
            t.async=1;
            t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];
            y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "xx7rpp037g");
        `;

        document.body.appendChild(script);
      }
    }, 1500);

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

      {/* Particles */}
      <Suspense fallback={null}>
        <ParticlesBackground />
      </Suspense>
    </>
  );
}

export default App;