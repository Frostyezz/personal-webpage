import React, { useState } from "react";
import Image from "next/image";

import en from "../misc/en.json";
import ro from "../misc/ro.json";

import { fadeInRight, pulse } from "react-animations";
import Radium, { StyleRoot } from "radium";

const anims = {
  fadeInRight: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInRight, "fadeInRight"),
  },
  pulse: {
    animation: "x .6s",
    animationName: Radium.keyframes(pulse, "pulse"),
  },
};

import styles from "../styles/Navbar.module.scss";

const Navbar = ({ lang, setEn, setRo }) => {
  const [collapse, changeCollapse] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <a href="#">ROBERT.</a>
      </div>
      <div className={styles.tabs}>
        <a href="#about">
          {lang === "en" ? en.navbar.tabs[0] : ro.navbar.tabs[0]}
        </a>
        <a href="#skillset">
          {lang === "en" ? en.navbar.tabs[1] : ro.navbar.tabs[1]}
        </a>
        <a href="#projects">
          {lang === "en" ? en.navbar.tabs[2] : ro.navbar.tabs[2]}
        </a>
        <a href="#contact">
          {lang === "en" ? en.navbar.tabs[3] : ro.navbar.tabs[3]}
        </a>
      </div>
      <div className={styles.right}>
        <div onClick={() => setEn()}></div>
        <div onClick={() => setRo()}></div>
      </div>
      <div className={styles.mobile}>
        <StyleRoot className={styles.top}>
          <h1>ROBERT.</h1>
          <i
            onClick={() => changeCollapse(!collapse)}
            className="bi bi-text-paragraph"
            style={collapse ? anims.pulse : null}
          ></i>
        </StyleRoot>
        {collapse ? (
          <StyleRoot>
            <div style={anims.fadeInRight} className={styles.mobileTabs}>
              <div className={styles.rightM}>
                <div onClick={() => setEn()}></div>
                <div onClick={() => setRo()}></div>
              </div>
              <a onClick={() => changeCollapse(!collapse)} href="#about">
                {lang === "en" ? en.navbar.tabs[0] : ro.navbar.tabs[0]}
              </a>
              <a onClick={() => changeCollapse(!collapse)} href="#skillset">
                {lang === "en" ? en.navbar.tabs[1] : ro.navbar.tabs[1]}
              </a>
              <a onClick={() => changeCollapse(!collapse)} href="#projects">
                {lang === "en" ? en.navbar.tabs[2] : ro.navbar.tabs[2]}
              </a>
              <a onClick={() => changeCollapse(!collapse)} href="#contact">
                {en.navbar.tabs[3]}
              </a>
            </div>
          </StyleRoot>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
