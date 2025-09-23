import React from 'react';
import styles from './HomeInvitation.module.css';
import wedding from '../../../assets/img/wedding.png';
import flower from '../../../assets/img/flower-image-ver2.png';

function HomeInvitation() {
  return (
    <section className={styles.invitation}>
      <div className={styles.imageBox}>
        <img src={wedding} alt="Wedding" />
      </div>

      <div className={styles.decoBox}>
        <div className={styles.textBox}>
          <img src={flower} alt="포인트 꽃" className={styles.icon} />
          <h2>Creative, Passionate, Artistic</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Dignissim consectetur
            tristique purus vehicula felis velit ac. Tempus velit morbi
            accumsan.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeInvitation;
