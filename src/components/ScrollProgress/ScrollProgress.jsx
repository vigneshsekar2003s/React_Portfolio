
import { memo } from "react";
import "./ScrollProgress.css";
import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Smooth scroll progress without React state updates
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="scroll-progress"
      style={{
        scaleX: smoothProgress,
        transformOrigin: "0% 50%",
      }}
    />
  );
}

export default memo(ScrollProgress);
