import React from "react";
import Fade from "react-reveal/Fade";

import styles from "../styles/Projects.module.scss";

import en from "../misc/en.json";
import ro from "../misc/ro.json";

const Projects = ({ lang, setEn, setRo }) => {
  return (
    <div id="projects" className={styles.cover}>
      <Fade bottom>
        <h1>━ {lang === "en" ? en.projects.title : ro.projects.title} ━</h1>
      </Fade>
      <div className={styles.wrapper}>
        <Fade left>
          <div className={styles.card}>
            <div className={styles.frost}></div>
            <div className={styles.desc}>
              <p>
                {lang === "en" ? en.projects.projs[0] : ro.projects.projs[0]}
              </p>
              <a href="https://frost-app.netlify.app/">
                {lang === "en"
                  ? en.projects.buttons[0]
                  : ro.projects.buttons[0]}
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
              <a href="https://github.com/Frostyezz/ecommerce-app">
                {lang === "en"
                  ? en.projects.buttons[1]
                  : ro.projects.buttons[1]}
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className={styles.card}>
            <div className={styles.greetify}></div>
            <div className={styles.desc}>
              <p>
                {lang === "en" ? en.projects.projs[1] : ro.projects.projs[1]}
              </p>
              <a href="https://greetify.netlify.app/">
                {lang === "en"
                  ? en.projects.buttons[0]
                  : ro.projects.buttons[0]}
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
              <a href="https://github.com/Frostyezz/dating-app">
                {lang === "en"
                  ? en.projects.buttons[1]
                  : ro.projects.buttons[1]}
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className={styles.card}>
            <div className={styles.grayed}></div>
            <div className={styles.desc}>
              <p>
                {lang === "en" ? en.projects.projs[2] : ro.projects.projs[2]}
              </p>
              <a href="https://grayed.herokuapp.com/">
                {lang === "en"
                  ? en.projects.buttons[0]
                  : ro.projects.buttons[0]}
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
              <a href="https://github.com/Frostyezz/social-web-app">
                {lang === "en"
                  ? en.projects.buttons[1]
                  : ro.projects.buttons[1]}
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Projects;
