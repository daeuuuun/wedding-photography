import React from 'react';
import styles from './HomeStatistics.module.css';

function HomeStatistics() {
  return (
    <>
      <section className={styles.container}>
        <p className={styles.title}>HELPING COUPLES BRING TO LIFE <br/>THEIR WEDDING DREAMS</p>
        <div className={styles.statistics}>
          <div className={styles.content}>
            <span className={styles.number}>12</span>
            <span className={styles.text}>Years Experience</span>
          </div>
          <div className={styles.content}>
            <span className={styles.number}>10<span>K</span></span>
            <span className={styles.text}>Photos Delivered</span>
          </div>
          <div className={styles.content}>
            <span className={styles.number}>300</span>
            <span className={styles.text}>Events Captured</span>
          </div>
          <div className={styles.content}>
            <span className={styles.number}>6</span>
            <span className={styles.text}>Awards</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeStatistics;
