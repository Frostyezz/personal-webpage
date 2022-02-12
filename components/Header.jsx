import React from "react";

import styles from "../styles/Header.module.scss";
import "animate.css/animate.css";

import en from "../misc/en.json";
import ro from "../misc/ro.json";

const Header = ({ lang, setEn, setRo }) => {
  return (
    <div className={styles.cover}>
      <div className={styles.heading}>
        <h3 className="animate__animated animate__fadeInLeft">
          {lang === "en" ? en.header[0] : ro.header[0]}
        </h3>
        <h1 className="animate__animated animate__fadeInRight animate__delay-1s">
          {lang === "en" ? en.header[1] : ro.header[1]}
        </h1>
        <h2 className="animate__animated animate__fadeInUp animate__delay-2s">
          {lang === "en" ? en.header[2] : ro.header[2]}
        </h2>
      </div>
    </div>
  );
};

export default Header;
