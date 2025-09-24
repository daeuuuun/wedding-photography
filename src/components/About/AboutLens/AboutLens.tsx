import React from "react";
import styles from "./AboutLens.module.css";

import photo1 from "../../../assets/img/about-lens1.png";
import photo2 from "../../../assets/img/about-lens2.png";

function AboutLens() {
  return (
    <section className={styles.lens}>
      <div className={styles.textBox}>
        <span className={styles.subTitle}>CRAFTING MEMORIES</span>
        <h2 className={styles.title}>Your Story, My Lens</h2>
        <p className={styles.desc}>
          Your wedding day is a once-in-a-lifetime event, and choosing the right
          photographer is essential to preserving its magic for years to come.
          I would be honored to be a part of your special day.
        </p>
        <button className={styles.button}>Book Now</button>
      </div>

      <div className={styles.images}>
        <img src={photo1} alt="Beach Wedding" className={styles.img1} />
        <img src={photo2} alt="Classic Wedding" className={styles.img2} />
      </div>
    </section>
  );
}

export default AboutLens;
