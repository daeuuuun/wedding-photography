import React from "react";
import styles from "./ContactSubmit.module.css";

import contactImg from "../../../assets/img/contact-submit.png";

function ContactSubmit() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.titles}>
        <h2 className={styles.title}>CONTACT</h2>
        <p className={styles.subTitle}>GET IN TOUCH</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.formArea}>
          <label>
            Your Name
            <input type="text" name="name" placeholder="Enter your name" />
          </label>

          <label>
            Contact Number
            <input type="tel" name="phone" placeholder="Enter your phone number" />
          </label>

          <label>
            Wedding / Event Date
            <input type="date" name="eventDate" />
          </label>

          <label>
            Tell me about yourself / event plan
            <textarea
              name="message"
              placeholder="Write here..."
            ></textarea>
          </label>

          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </div>

        <div className={styles.imageArea}>
          <img src={contactImg} alt="브라이드 컨택트" />
        </div>
      </div>
    </section>
  );
}

export default ContactSubmit;
