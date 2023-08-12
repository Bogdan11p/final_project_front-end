import "../Preloader/Preloader.css";
import React from "react";

const Preloader = ({}) => {
  return (
    <div className="preloader">
      <div className="preloader__cirlce"></div>
      <p className="preloader__description">Searching for news...</p>
    </div>
  );
};

export default Preloader;
