import React, { useEffect, useState } from "react";

import Fade from "react-reveal/Fade";
import Carousel from "./Carousel";

import styles from "../styles/Skillset.module.scss";

import en from "../misc/en.json";
import ro from "../misc/ro.json";

const Skillset = ({ lang, setEn, setRo }) => {
  return (
    <div id="skillset" className={styles.cover}>
      <Fade bottom>
        <h1>━ {lang === "en" ? en.skillset.title : ro.skillset.title} ━</h1>
      </Fade>
      <Fade left>
        <Carousel />
      </Fade>
    </div>
  );
};

export default Skillset;
