// components/About.js

import React from "react";

import myImage from "../assets/my-image.png";
function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="image-container">
          <img src={myImage} alt="My Profile" />
        </div>
        <div className="text-container">
          <p>
            Welcome to my portfolio! I am a passionate web developer
            specializing in React.js, Redux, and JavaScript. With a strong
            foundation in frontend development, I strive to build elegant and
            efficient web applications that deliver exceptional user experiences{" "}
          </p>
          {/* Add more information about yourself */}
        </div>
      </div>
    </section>
  );
}

export default About;
