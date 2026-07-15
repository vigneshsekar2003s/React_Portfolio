import "./ParticlesBackground.css";
import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticlesBackground() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const init = async () => {
      await loadSlim();
      setLoaded(true);
    };

    init();
  }, []);

  if (!loaded) return null;

  return (
    <Particles
      id="particles"
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },

        background: {
          color: {
            value: "transparent",
          },
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 60,
          },

          color: {
            value: "#00e5ff",
          },

          links: {
            enable: true,
            color: "#00e5ff",
            distance: 150,
            opacity: 0.2,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
          },

          opacity: {
            value: 0.3,
          },

          size: {
            value: {
              min: 2,
              max: 4,
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}

export default ParticlesBackground;