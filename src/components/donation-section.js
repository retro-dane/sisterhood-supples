import React from "react";
import * as styles from "./donation-section.module.css";


const DonationSection = () => {
  return (
    <section className={styles.donate}>
      <h2 className={styles.donate}>Support Our Mission</h2>
      <p className={styles.donate}>Your donations help us provide essential care items to those in need.</p>
      <button className={styles.donateButton}>Donate Now</button>
    </section>
  );
};

export default DonationSection;