import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";
import styles from "./style.module.css";
import {Particle} from "../../components/particle";

const Hero = () => {
  return (
    <div className={styles.Container}>
      <Particle />
      <div className={styles.HeroItem}>
        <div>
          <h1>Hello My name is Enerel</h1>
          <h1>
            I am the{" "}
            <span style={{ color: "#7986CB" }}>
              <Typewriter
                words={["React Developer", "UI Designer", "Software Engineer"]}
                loop={false}
              />
            </span>
          </h1>
          <div className={styles.Icons}>
            <SocialIcon network="instagram" url="https://www.instagram.com/bqxrbie.___/" />
            <SocialIcon network="youtube" url="https://youtu.be/dsQSNO_UlfA" />
          </div>
        </div>
      </div>
      <div className={styles.HeroItem}>
        <div className={styles.ImgContainer}>
          <img
            src="./images/imagen-de-la-luna_ae2043e2_1041x1041.jpeg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;