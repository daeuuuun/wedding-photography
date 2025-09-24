import React from "react";
import styles from "./AboutFacts.module.css";

import img1 from "../../../assets/img/about-wedding5.png";
import img2 from "../../../assets/img/about-wedding6.png";
import img3 from "../../../assets/img/about-wedding7.png";

function AboutFacts() {
  return (
    <section className={styles.facts}>
      <div className={styles.titles}>
        <span className={styles.subTitle}>GET TO KNOW ME</span>
        <h2 className={styles.title}>A Few Facts About Myself</h2>
      </div>

      <div className={styles.grid}>
        <div className={styles.item}>
          <img src={img1} alt="웨딩사진 1" className={styles.image} />
        </div>
        <div className={styles.item}>
          <div className={styles.content}>
            <h3 className={styles.number}>1</h3>
            <p>
              Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt
              consequat nec potenti. Justo molestie amet vulputate aliquam
              viverra ut viverra lorem. Velit tellus vitae massa sed egestas
              ornare pretium.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <img src={img3} alt="웨딩사진 3" className={styles.image} />
        </div>

        <div className={styles.item}>
          <div className={styles.content}>
            <h3 className={styles.number}>2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat
              nec potenti. Justo molestie amet vulputate aliquam viverra ut
              viverra lorem. Velit tellus vitae massa sed egestas ornare
              pretium.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <img src={img2} alt="웨딩사진 2" className={styles.image} />
        </div>
        <div className={styles.item}>
          <div className={styles.content}>
            <h3 className={styles.number}>3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat
              nec potenti. Justo molestie amet vulputate aliquam viverra ut
              viverra lorem. Velit tellus vitae massa sed egestas ornare
              pretium.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutFacts;
