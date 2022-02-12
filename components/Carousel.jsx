import React, { useEffect, useState } from "react";
import Image from "next/image";
import "animate.css/animate.css";

import styles from "../styles/Skillset.module.scss";

import en from "../misc/en.json";

const skills = [
  "React.js",
  "Node.js",
  "HTML-CSS-JS",
  "Next.js",
  "Gatsby.js",
  "Socket.io",
  "MongoDB",
  "Redux",
  "Express.js",
];

const Carousel = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (i === skills.length - 1) setI(0);
      else setI(i + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [i]);

  return (
    <div className={styles.carousel}>
      <div className={styles.innerCarousel}>
        <div>
          <i
            onClick={() => (i ? setI(i - 1) : setI(skills.length - 1))}
            className="bi bi-arrow-left-circle-fill"
          ></i>
        </div>
        <div
          className={`animate__animated ${
            i % 2 === 0 ? "animate__flipInY" : "animate__flipInX"
          }`}
        >
          <Image
            loading="eager"
            src={`/${i ? skills[i - 1] : skills[skills.length - 1]}-logo.png`}
            width="100px"
            height="100px"
          ></Image>
          <span>{i ? skills[i - 1] : skills[skills.length - 1]}</span>
        </div>
        <div
          className={`animate__animated ${
            i % 2 === 0 ? "animate__flipInY" : "animate__flipInX"
          }`}
        >
          <Image
            loading="eager"
            src={`/${skills[i]}-logo.png`}
            width="200px"
            height="200px"
          ></Image>
          <span>{skills[i]}</span>
        </div>
        <div
          className={`animate__animated ${
            i % 2 === 0 ? "animate__flipInY" : "animate__flipInX"
          }`}
        >
          <Image
            loading="eager"
            src={`/${
              i !== skills.length - 1 ? skills[i + 1] : skills[0]
            }-logo.png`}
            width="100px"
            height="100px"
          ></Image>
          <span>{i !== skills.length - 1 ? skills[i + 1] : skills[0]}</span>
        </div>
        <div>
          <i
            onClick={() => (i !== skills.length - 1 ? setI(i + 1) : setI(0))}
            className="bi bi-arrow-right-circle-fill"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
