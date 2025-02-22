import React from "react";
import * as styles from "./contact-section.module.css"; // Import the CSS module

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>Contact Us</h2>
      <p className={styles.description}>
        We'd love to hear from you! Please reach out with any questions.
      </p>
      <form className={styles.contactForm}>
        <input type="text" placeholder="Your Name" className={styles.inputField} />
        <input type="email" placeholder="Your Email" className={styles.inputField} />
        <textarea placeholder="Your Message" className={styles.textareaField}></textarea>
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
    </section>
  );
};

export default Contact;