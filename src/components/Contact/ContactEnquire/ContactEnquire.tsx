import React from "react";
import styles from "./ContactEnquire.module.css";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

import bgImage from "../../../assets/img/contact-enquire.png";

function ContactEnquire() {
  return (
    <section className={styles.enquire}>
      <h3 className={styles.heading}>Enquire Now!</h3>
      <p className={styles.quote}>
        “YOU WILL NEVER KNOW THE VALUE OF A MOMENT UNTIL IT BECOMES A MEMORY.”
      </p>

      <div className={styles.bgWrapper}>
        <img src={bgImage} alt="Enquire Background" className={styles.image} />

        <div className={styles.infoBox}>
          <div className={styles.infoItem}>
            <FiMail className={styles.icon} />
            <div className={styles.label}>Email</div>
            <div className={styles.text}>contact@TessaMorgan.xyz</div>
          </div>

          <div className={styles.infoItem}>
            <FiMapPin className={styles.icon} />
            <div className={styles.label}>Address</div>
            <div className={styles.text}>
              5396 North Reese Avenue,<br />Fresno CA 93722
            </div>
          </div>

          <div className={styles.infoItem}>
            <FiPhone className={styles.icon} />
            <div className={styles.label}>Contact</div>
            <div className={styles.text}>+1 901 247 5467</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactEnquire;
