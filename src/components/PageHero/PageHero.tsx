import React from 'react';
import heroImg from '../../assets/img/main-image.png';
import styles from './PageHero.module.css';

function PageHero() {
  return (
    <>
      <section className={styles.hero}>
        <img className={styles.heroImg} src={heroImg} alt='히어로 이미지' />
      </section>
    </>
  );
}

export default PageHero;
