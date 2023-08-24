import "../Preloader/Preloader.css";
import React from "react";

const Preloader = () => {
  return (
    <section className="preloader">
      <i className="preloader__cirlce"></i>
      <p className="preloader__description">Searching for news...</p>
    </section>
  );
};

export default Preloader;
