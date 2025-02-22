import React from "react";
import * as styles from "./hero.module.css";


const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Welcome to Sisterhood Supplies</h1>
      <p className={styles.description}>Providing personal care to female wards of the state.</p>
    </section>
  );
};

export default HeroSection;