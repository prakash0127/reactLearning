// App.js

import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Technologies />
        <Projects />
      </main>
    </div>
  );
}

export default App;
