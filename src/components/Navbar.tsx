import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav>

      <div className="logo">
        <a href="#hero"><img src="img/logo.png" alt="Logo" /></a>
      </div>

      <div className="">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
