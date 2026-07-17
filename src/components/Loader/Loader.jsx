import "./Loader.css";
import { motion } from "framer-motion";
import Icon2 from "../../assets/image/Icon2.jpeg";
// import VSLogo from "../../assets/image/VS-Logo.jpeg";

function Loader() {
  return (
    <div className="loader">

      {/* VS Logo */}
      <motion.img
        // src={VSLogo}
        // alt="VS Logo"
        src={Icon2}
        alt="Icon2"
        className="loader-logo"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
        }}
      />

      {/* Portfolio Text */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.6,
        }}
      >
        VIGNESH SEKAR
      </motion.h2>

      {/* Loading Line */}
      <motion.div
        className="loading-bar"
        initial={{ width: 0 }}
        animate={{ width: "220px" }}
        transition={{
          duration: 2.5,
        }}
      />

    </div>
  );
}

export default Loader;