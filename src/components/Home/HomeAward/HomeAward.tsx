import React from 'react';
import styles from './HomeAward.module.css';
import flower from '../../../assets/img/flower-image.png';

function HomeAward() {
  return (
    <>
      <section className={styles.mainAward}>
        <img src={flower} alt='포인트 꽃' />
        <h2>AWARD WINNING PHOTOGRAPHY</h2>
        <p>Showcasing your big day in a memorable and unforgettable way.</p>
      </section>
    </>
  );
}

export default HomeAward;
