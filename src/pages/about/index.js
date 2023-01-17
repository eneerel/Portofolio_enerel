import React from "react";
import styles from "./style.module.css";
import { Typewriter } from "react-simple-typewriter";
const About = () => {
  return (
    <div id="about" className={styles.Container}>
      <h2 className="title"> 
            About{" "}
            <span style={{ color: "#7986CB" }}>
              <Typewriter
                words={["Me"]}
                loop={false}
              />
            </span>
            </h2>
            <div className={styles.ImgContainer}>
          <img
            src="./images/324000036_909588123384162_3869489091671374170_n.jpg"
          />
        </div>
        

    </div>
  );
};

export default About;