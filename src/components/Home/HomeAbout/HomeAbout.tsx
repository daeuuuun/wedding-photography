import React from 'react';
import styles from './HomeAbout.module.css';
import person from '../../../assets/img/Author Bio Photo.png';
import flower from '../../../assets/img/Asset 1Flowerz Underline 1.png';

function HomeAbout() {
  return (
    <>
      <section className={styles.mainAbout}>
        <img src={person} alt='인물' />
        <div className={styles.about}>
          <span className={styles.point}>“</span>
          <h2>Hello, My Name is Tessa</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Dignissim consectetur tristique purus vehicula felis velit ac. Tempus velit morbi accumsan id sit interdum lacus turpis ac. Integer malesuada sagittis placerat eget.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur. Dignissim consectetur tristique purus vehicula felis velit ac. Tempus velit morbi accumsan id sit interdum lacus turpis ac. Integer malesuada sagittis placerat eget.
          </p>
          <img src={flower} alt='꽃 패턴' />
          <span className={styles.name}>Tessa.M</span>
          <button>Learn More</button>
        </div>
      </section>
    </>
  );
}

export default HomeAbout;
