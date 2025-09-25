import React from "react";
import styles from "./ServicesProcess.module.css";

import img1 from "../../../assets/img/process1.png";
import img2 from "../../../assets/img/process2.png";
import img3 from "../../../assets/img/process3.png";
import img4 from "../../../assets/img/process4.png";
import img5 from "../../../assets/img/process5.png";

function ServicesProcess() {
  const items = [
    { type: "image", img: img1 },
    {
      type: "text",
      number: "1",
      title: "BREAKING THE ICE",
      desc: "Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam.",
    },
    { type: "image", img: img2 },

    {
      type: "text",
      number: "2",
      title: "PLANNING & PREPARATION",
      desc: "Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra.",
    },
    { type: "image", img: img3 },
    {
      type: "text",
      number: "3",
      title: "SESSION COVERAGE",
      desc: "Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra.",
    },

    { type: "image", img: img4 },
    {
      type: "text",
      number: "4",
      title: "POST-PRODUCTION & DELIVERY",
      desc: "Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam.",
    },
    { type: "image", img: img5 },
  ];

  return (
    <section className={styles.process}>
      <div className={styles.titles}>
        <h2 className={styles.title}>PROCESS</h2>
        <span className={styles.subTitle}>What to Expect</span>
      </div>

      <div className={styles.grid}>
        {items.map((item, i) =>
          item.type === "image" ? (
            <div key={i} className={styles.item}>
              <img src={item.img} alt="" className={styles.image} />
            </div>
          ) : (
            <div key={i} className={styles.item}>
              <div className={styles.content}>
                <h3 className={styles.number}>{item.number}</h3>
                <h4 className={styles.stepTitle}>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default ServicesProcess;
