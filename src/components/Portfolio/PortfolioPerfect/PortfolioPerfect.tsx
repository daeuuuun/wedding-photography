import React from "react";
import styles from "./PortfolioPerfect.module.css";
import img from "../../../assets/img/portfolio-perfect.png";

function PortfolioPerfect() {
  return (
    <section className={styles.perfect}>
      <div className={styles.textBox}>
        <span className={styles.title}>YOU'RE PERFECT</span>
        <h3 className={styles.subTitle}>Stay Beautiful</h3>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur. Ac in bibendum pharetra justo
          nullam est placerat. Eget tortor lacus porta pellentesque duis velit
          habitant nisl dignissim.
        </p>
        <button className={styles.button}>Enquire Now</button>
      </div>
      <div className={styles.imageWrapper}>
        <img src={img} alt="Wedding" className={styles.image} />
      </div>
    </section>
  );
}

export default PortfolioPerfect;
