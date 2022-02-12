import React from "react";

import Fade from "react-reveal/Fade";

import styles from "../styles/About.module.scss";

import en from "../misc/en.json";
import ro from "../misc/ro.json";

const About = ({ lang, setEn, setRo }) => {
  return (
    <div id="about" className={styles.cover}>
      <Fade top>
        <h1>━ {lang === "en" ? en.about.title : ro.about.title} ━</h1>
      </Fade>
      <Fade>
        <div className={styles.about}>
          <div className={styles.photo}></div>
          <div className={styles.bio}>
            <p>{lang === "en" ? en.about.bio : ro.about.bio}</p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default About;
