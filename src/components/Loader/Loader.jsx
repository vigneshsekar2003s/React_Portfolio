import { memo } from "react";
import "./Loader.css";
import Icon2 from "../../assets/image/Icon2.webp";

function Loader() {
  return (
    <div className="loader">
      <img
        src={Icon2}
        alt="Vignesh Sekar Logo"
        className="loader-logo"
        width="120"
        height="120"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      <h2 className="loader-title">
        VIGNESH SEKAR
      </h2>

      <div className="loading-bar">
        <div className="loading-fill"></div>
      </div>
    </div>
  );
}

export default memo(Loader);