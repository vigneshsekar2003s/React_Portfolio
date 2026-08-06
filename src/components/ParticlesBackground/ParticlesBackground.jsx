import "./ParticlesBackground.css";
import { memo, useEffect, useMemo, useState } from "react";
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

  const isMobile = window.innerWidth <= 768;

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1,
      },

      background: {
        color: {
          value: "transparent",
        },
      },

      detectRetina: false,

      fpsLimit: 30,

      particles: {
        number: {
          value: isMobile ? 12 : 25,
          density: {
            enable: true,
            area: 1000,
          },
        },

        color: {
          value: "#00e5ff",
        },

        opacity: {
          value: 0.2,
        },

        size: {
          value: {
            min: 1,
            max: 2.5,
          },
        },

        links: {
          enable: true,
          distance: 120,
          color: "#00e5ff",
          opacity: 0.15,
          width: 1,
        },

        move: {
          enable: true,
          speed: 0.5,
          outModes: {
            default: "out",
          },
        },
      },
    }),
    [isMobile]
  );

  if (!loaded) return null;

  return <Particles id="particles" options={options} />;
}

export default memo(ParticlesBackground);