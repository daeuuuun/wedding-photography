import React from "react";
import styles from "./PortfolioHighlight.module.css";

import img1 from "../../../assets/img/portfolio1.png";
import img2 from "../../../assets/img/portfolio2.png";
import img3 from "../../../assets/img/portfolio3.png";
import img4 from "../../../assets/img/portfolio4.png";
import img5 from "../../../assets/img/portfolio5.png";
import img6 from "../../../assets/img/portfolio6.png";
import img7 from "../../../assets/img/portfolio7.png";
import img8 from "../../../assets/img/portfolio8.png";
import img9 from "../../../assets/img/portfolio9.png";

const works = [
  { img: img1, title: "Sarah & Luke", category: "WEDDING" },
  { img: img2, title: "Richard & Jane", category: "WEDDING" },
  { img: img3, title: "Gareth & Eva", category: "WEDDING" },
  { img: img4, title: "Sarah & Luke", category: "ENGAGEMENT" },
  { img: img5, title: "Richard & Jane", category: "ENGAGEMENT" },
  { img: img6, title: "Gareth & Eva", category: "ENGAGEMENT" },
  { img: img7, title: "Sarah", category: "PORTRAIT" },
  { img: img8, title: "Jane", category: "PORTRAIT" },
  { img: img9, title: "Angeline", category: "PORTRAIT" },
];

function PortfolioHighlight() {
  return (
    <section className={styles.portfolio}>
      <div className={styles.titles}>
        <h2 className={styles.title}>PORTFOLIO</h2>
        <p className={styles.subTitle}>HIGHLIGHTED WORKS</p>
      </div>

      <div className={styles.grid}>
        {works.map((work, i) => (
          <div key={i} className={styles.card}>
            <img src={work.img} alt={work.title} className={styles.image} />
            <div className={styles.info}>
              <h3>{work.title}</h3>
              <span>{work.category}</span>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.button}>GET IN TOUCH</button>
    </section>
  );
}

export default PortfolioHighlight;
