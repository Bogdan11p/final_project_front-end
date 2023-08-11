import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />
      <About />
      <Footer />
    </div>
  );
}

export default App;
