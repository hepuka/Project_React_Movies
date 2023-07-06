import React, { useEffect, useState } from "react";
import "./Nav.css";
import avatar from "./img/avatar.jpg";
import nlogo from "../src/img/nlogo.png";

const Nav = () => {
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);

    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <a href="/" rel="noreferrer">
          <img className="nav__logo" src={nlogo} alt="navlogo" />
        </a>
      </div>
    </div>
  );
};

export default Nav;
