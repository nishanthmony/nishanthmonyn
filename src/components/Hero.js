import React from "react";
import "./hero.css";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="content">
        <p>Hi, I am</p>
        <p>Nishanth Mony N</p>
        <p>React Native Full Stack Developer</p>
        <p></p>
        <button className="button">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            style={{ color: "white" }}
          >
            Let's go
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
