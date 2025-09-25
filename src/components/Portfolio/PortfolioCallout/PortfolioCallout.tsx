import React from "react";
import styles from "./PortfolioCallout.module.css";

import bgImg from "../../../assets/img/portfolio-callout.png";

function PortfolioCallout() {
  return (
    <section className={styles.callout}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h3 className={styles.title}>My Promise</h3>
          <p className={styles.desc}>
            I guarantee breathtaking wedding photos that perfectly capture the
            magic of your special day, or your money back
          </p>
        </div>
      </div>
    </section>
  );
}

export default PortfolioCallout;
