import React from "react";
import styles from "./ServicesProduct.module.css";

import img1 from "../../../assets/img/services-img1.png";
import img2 from "../../../assets/img/services-img2.png";
import img3 from "../../../assets/img/services-img3.png";

const ServicesProduct = () => {
  const packages = [
    {
      title: "Wedding",
      img: img1,
      desc: [
        "500+ High-Quality Photos",
        "6 Hours HD Footage",
        "*Additional Photographer subject to charge",
        "*Videographer subject to charge",
      ],
      price: "$799",
    },
    {
      title: "Portrait",
      img: img2,
      desc: [
        "At least 10 High Quality Photos",
        "Professionally Edited",
        "Hourly rates applied",
        "*Videographer subject to charge",
      ],
      price: "$399",
    },
    {
      title: "Engagement",
      img: img3,
      desc: [
        "200 High-Quality Photos",
        "3 Hours HD Footage",
        "*Additional Photographer subject to charge",
        "*Videographer subject to charge",
      ],
      price: "$799",
    },
  ];

  return (
    <section className={styles.services}>
      <h2 className={styles.title}>SERVICES</h2>
      <h3 className={styles.subTitle}>PHOTOGRAPHY PACKAGES</h3>

      <div className={styles.cards}>
        {packages.map((pkg, i) => (
          <div key={i} className={styles.card}>
            <img src={pkg.img} alt={pkg.title} className={styles.image} />
            <h3 className={styles.cardTitle}>{pkg.title}</h3>
            <ul className={styles.descList}>
              {pkg.desc.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
            <p className={styles.session}>PER SESSION</p>
            <p className={styles.price}>{pkg.price}</p>
          </div>
        ))}
      </div>

      <button className={styles.button}>GET IN TOUCH</button>
    </section>
  );
};

export default ServicesProduct;
