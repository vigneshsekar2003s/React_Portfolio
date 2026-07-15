import "./Loader.css";
import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="loader">

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
        }}
      >
        VS
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.6,
          duration: 0.6,
        }}
      >
        PORTFOLIO
      </motion.h2>

      <motion.div
        className="loading-bar"
        initial={{ width: 0 }}
        animate={{ width: "220px" }}
        transition={{
          duration: 2,
        }}
      />

    </div>
  );
}

export default Loader;