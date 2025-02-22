import React from "react";
import * as styles from "./about.module.css";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles.title}>About Us</h2>
      <p className={styles.description}>
        Sisterhood Supplies is dedicated to providing personal care items for
        young women in need, ensuring dignity and comfort.
      </p>
      <div className={styles.imageContainer}>

      </div>
    </section>
  );
};

export default About;