import React from "react";
import styles from "./AboutStory.module.css";
import person from "../../../assets/img/Author Bio Photo2.png";
import flower from "../../../assets/img/flower-image-ver3.png";
import wedding1 from "../../../assets/img/about-wedding1.png";
import wedding2 from "../../../assets/img/about-wedding2.png";
import wedding3 from "../../../assets/img/about-wedding3.png";
import wedding4 from "../../../assets/img/about-wedding4.png";

function AboutStory() {
  return (
    <section className={styles.story}>
      <div className={styles.titles}>
        <span className={styles.subTitle}>ABOUT</span>
        <h2 className={styles.title}>MY STORY</h2>
      </div>

      <div className={styles.container}>
        <div className={styles.imageBox}>
          <img src={person} alt="인물" />
        </div>

        <div className={styles.textBox}>
          <p>
            Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt
            consequat nec potenti. Justo molestie amet vulputate aliquam
            viverra ut viverra lorem. Velit tellus vitae massa sed egestas
            ornare pretium. Donec odio faucibus consectetur feugiat varius.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt
            consequat nec potenti. Justo molestie amet vulputate aliquam
            viverra ut viverra lorem. Velit tellus
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt
            consequat nec potenti. Justo molestie amet vulputate aliquam
            viverra ut viverra lorem. Velit tellus vitae massa sed egestas
            ornare pretium
          </p>

          <img src={flower} alt="포인트 꽃" className={styles.decoration} />

          <button className={styles.button}>View Portfolio</button>
        </div>
      </div>

      <div className={styles.images}>
        <div className={styles.imagesTrack}>
          <img src={wedding4} alt="웨딩사진 4" />
          <img src={wedding1} alt="웨딩사진 1" />
          <img src={wedding2} alt="웨딩사진 2" />
          <img src={wedding3} alt="웨딩사진 3" />
          <img src={wedding4} alt="웨딩사진 4" />
          <img src={wedding1} alt="웨딩사진 1" />
          <img src={wedding2} alt="웨딩사진 2" />
          <img src={wedding3} alt="웨딩사진 3" />
          <img src={wedding4} alt="웨딩사진 4" />
          <img src={wedding1} alt="웨딩사진 1" />
        </div>
      </div>
    </section>
  );
}

export default AboutStory;
