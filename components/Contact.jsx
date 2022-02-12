import React from "react";
import Fade from "react-reveal/Fade";

import styles from "../styles/Contact.module.scss";

import en from "../misc/en.json";
import ro from "../misc/ro.json";

const Contact = ({ lang, setEn, setRo }) => {
  return (
    <div id="contact" className={styles.cover}>
      <Fade down>
        <h1>
          {lang === "en" ? en.contact.title[0] : ro.contact.title[0]}{" "}
          <span>
            {lang === "en" ? en.contact.title[1] : ro.contact.title[1]}
          </span>
        </h1>
      </Fade>
      <Fade left>
        <div className={styles.contact}>
          <div>
            <i className="bi bi-telephone"></i>
            <p>+40758582969</p>
          </div>
          <div>
            <i className="bi bi-envelope"></i>
            <p>robert.moraru2012@yahoo.com</p>
          </div>
          <div>
            <a href="https://www.facebook.com/moraru.robert.5">
              <i className="bi bi-facebook"></i>
              <p>
                Facebook <i className="bi bi-box-arrow-up-right"></i>
              </p>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/robert-moraru-5801b01a7/">
              <i className="bi bi-linkedin"></i>
              <p>
                LinkedIn <i className="bi bi-box-arrow-up-right"></i>
              </p>
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
