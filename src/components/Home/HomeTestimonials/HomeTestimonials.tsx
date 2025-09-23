import React from "react";
import styles from "./HomeTestimonials.module.css";
import wedding from "../../../assets/img/wedding3.png";

const HomeTestimonials: React.FC = () => {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.title}>Client Testimonials</h2>

      <div className={styles.wrapper}>
        <div className={styles.card}>
          <span className={styles.quote}>“</span>
          <p>
            Showcasing your Big Day in a <br />
            Memorable & Unforgettable way.
          </p>
          <h4 className={styles.name}>SARAH & LUKE</h4>
        </div>

        <div className={styles.imageBox}>
          <img src={wedding} alt="Couple" />
        </div>

        {/* 데스크탑용 화살표 */}
        <button className={`${styles.arrow} ${styles.left}`}>{"<"}</button>
        <button className={`${styles.arrow} ${styles.right}`}>{">"}</button>
      </div>

      {/* 모바일용 화살표 */}
      <div className={styles.arrowBox}>
        <button className={styles.arrow}>{"<"}</button>
        <button className={styles.arrow}>{">"}</button>
      </div>
    </section>
  );
};

export default HomeTestimonials;
