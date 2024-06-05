// components/Header.js

import React from "react";

function Header() {
  return (
    <header>
      <h1>Prakash Gupta</h1>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#technologies">Technologies</a>
          </li>
        </ul>
      </nav>
      <div className="summary">
        <h2>Summary </h2>
        <p>
          As a results-oriented Associate Software Engineer, I specialize in
          Front-end development. I have a proven track record of successfully
          developing and launching applications. Proficient in HTML, CSS,
          JavaScript, and ReactJS, possess strong problem-solving and debugging
          capabilities and excel in collaborative environments with excellent
          communication and teamwork skills. Additionally, I have worked on
          building and deploying applications on the App Store and Google Play
          Store.
        </p>
      </div>
    </header>
  );
}

export default Header;
