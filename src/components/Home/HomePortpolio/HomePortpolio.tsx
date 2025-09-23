import React from 'react';
import styles from './HomePortpolio.module.css';
import wedding1 from '../../../assets/img/wedding1.png';
import wedding2 from '../../../assets/img/wedding2.png';

function HomePortpolio() {
  return (
    <>
      <section className={styles.portpolio}>
        <h2>PORTPOLIO</h2>
        <span>Featured Story</span>
        <div className={styles.contentBoxs}>
          <div className={styles.content}>
            <span>01</span>
            <p className={styles.title}>Ricardo & Michelle</p>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consecte Dignissim consectetur tristique purus vehicula felis velit.
            </p>
          </div>
          <div className={styles.content}>
            <img src={wedding1} alt='웨딩사진1' />
          </div>
          <div className={styles.content}>
            <img src={wedding2} alt='웨딩사진2' />
          </div>
        </div>
        <button>
          View Gallery
        </button>
      </section>
    </>
  );
}

export default HomePortpolio;
