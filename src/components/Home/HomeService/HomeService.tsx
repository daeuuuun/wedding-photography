import React from 'react';
import styles from './HomeService.module.css';
import flower1 from '../../../assets/img/flower1.png';
import flower2 from '../../../assets/img/flower2.png';
import flower3 from '../../../assets/img/flower3.png';

function HomeService() {
  return (
    <>
      <section className={styles.services}>
        <h2>SERVICES</h2>
        <p>What I Offer</p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={flower1} alt="Wedding" />
            <h3>Wedding</h3>
            <p>Per Session</p>
            <span>$2999</span>
            <button>More Details</button>
          </div>

          <div className={styles.card}>
            <img src={flower2} alt="Portrait" />
            <h3>Portrait</h3>
            <p>Per Session</p>
            <span>$399</span>
            <button>More Details</button>
          </div>

          <div className={styles.card}>
            <img src={flower3} alt="Engagement" />
            <h3>Engagement</h3>
            <p>Per Session</p>
            <span>$1999</span>
            <button>More Details</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeService;
