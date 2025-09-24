import React from "react";
import styles from "./HomeContact.module.css";
import wedding from "../../../assets/img/wedding4.png";

function HomeContact() {
  return (
    <section className={styles.container}>
      <div className={styles.formBox}>
        <h2 className={styles.contact}>CONTACT</h2>
        <p className={styles.title}>Get in Touch</p>
        <form className={styles.form}>
          <label>
            NAME
            <input type="text" name="name" />
          </label>
          <label>
            EMAIL
            <input type="email" name="email" />
          </label>
          <label>
            MESSAGE
            <textarea name="message" rows={4}></textarea>
          </label>
          <button type="submit" className={styles.button}>Send</button>
        </form>
      </div>

      <div className={styles.imageBox}>
        <img src={wedding} alt="Wedding couple" />
      </div>
    </section>
  );
}

export default HomeContact;
