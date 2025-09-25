import React from 'react';
import styles from './ServicesCallout.module.css';
import flower from '../../../assets/img/flower-image.png';

function ServicesCallout() {
  return (
    <>
      <section className={styles.mainAward}>
        <img src={flower} alt='포인트 꽃' />
        <p>Showcasing your big day in a memorable and unforgettable way.</p>
      </section>
    </>
  );
}

export default ServicesCallout;
