import React from "react";
import styles from "./BlogStory.module.css";

import img1 from "../../../assets/img/blog1.png";
import img2 from "../../../assets/img/blog2.png";
import img3 from "../../../assets/img/blog3.png";
import img4 from "../../../assets/img/blog4.png";

const stories = [
  {
    img: img1,
    title: "GIFT IDEAS FOR THE BRIDE & GROOM ON THE WEDDING DAY",
    date: "28 July 2023",
    category: "Wedding",
    desc: "Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate."
  },
  {
    img: img2,
    title: "GIFT IDEAS FOR THE BRIDE & GROOM ON THE WEDDING DAY",
    date: "28 July 2023",
    category: "Wedding",
    desc: "Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate."
  },
  {
    img: img3,
    title: "GIFT IDEAS FOR THE BRIDE & GROOM ON THE WEDDING DAY",
    date: "28 July 2023",
    category: "Wedding",
    desc: "Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate."
  },
  {
    img: img2,
    title: "GIFT IDEAS FOR THE BRIDE & GROOM ON THE WEDDING DAY",
    date: "28 July 2023",
    category: "Wedding",
    desc: "Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate."
  },
  {
    img: img1,
    title: "GIFT IDEAS FOR THE BRIDE & GROOM ON THE WEDDING DAY",
    date: "28 July 2023",
    category: "Wedding",
    desc: "Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate."
  },
  {
    img: img4,
    title: "GIFT IDEAS FOR THE BRIDE & GROOM ON THE WEDDING DAY",
    date: "28 July 2023",
    category: "Wedding",
    desc: "Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate."
  }
];

function BlogStory() {
  return (
    <section className={styles.blog}>
      <div className={styles.titles}>
        <h2 className={styles.title}>BLOG</h2>
        <p className={styles.subTitle}>LATEST STORIES</p>
        <p className={styles.intro}>
          Lorem ipsum dolor sit amet consectetur. Ipsum vel tincidunt tincidunt
          nec ornare. Amet pellentesque erat dui lacus ultricies nec sit.
        </p>
      </div>

      <div className={styles.grid}>
        {stories.map((story, i) => (
          <div key={i} className={styles.card}>
            <img src={story.img} alt={story.title} className={styles.image} />
            <h3 className={styles.cardTitle}>{story.title}</h3>
            <p className={styles.meta}>
              <p>Date: <span>{story.date}</span></p>
              <p>Category: <span>{story.category}</span></p>
            </p>
            <p className={styles.desc}>{story.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogStory;
