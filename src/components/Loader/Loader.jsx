import { memo } from "react";
import "./Loader.css";
import { motion } from "framer-motion";
import Icon2 from "../../assets/image/Icon2.webp";

function Loader() {
  return (
    <div className="loader">
      <motion.img
        src={Icon2}
        alt="Vignesh Sekar Logo"
        className="loader-logo"
        width="120"
        height="120"
        loading="eager"
        decoding="async"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
      />

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.4,
        }}
      >
        VIGNESH SEKAR
      </motion.h2>

      <motion.div
        className="loading-bar"
        initial={{ width: 0 }}
        animate={{ width: "220px" }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      />
    </div>
  );
}

export default memo(Loader);