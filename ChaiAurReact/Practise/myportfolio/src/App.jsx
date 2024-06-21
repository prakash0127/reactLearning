// App.js
import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  const [isWhiteBackground, setIsWhiteBackground] = useState(true);

  const handleBackgroundToggle = () => {
    setIsWhiteBackground(!isWhiteBackground);
  };
  return (
    <div
      className={isWhiteBackground ? "white-background" : "black-background"}
    >
      <main>
        <Header onToggleBackground={handleBackgroundToggle} />
        {/* Your main content goes here */}
        <About />
        <Technologies />
        <Projects />
      </main>
    </div>
  );
}

export default App;
