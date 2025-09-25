import React, { useState } from "react";
import styles from "./ServicesFAQ.module.css";

const faqData = [
  { question: "WHAT IS YOUR PHOTOGRAPHY STYLE?", answer: "My style is a blend of documentary and fine art photography, capturing genuine emotions with a timeless touch." },
  { question: "HOW FAR IN ADVANCE CAN SHOULD WE BOOK YOUR SERVICES?", answer: "I recommend booking at least 6-12 months in advance to secure your date." },
  { question: "DO YOU REQUIRE A DEPOSIT, AND WHAT ARE YOUR PAYMENT TERMS?", answer: "Yes, a deposit is required to secure your booking. The remaining balance can be paid before or on the event day." },
  { question: "CAN WE CUSTOMIZE A PHOTOGRAPHY PACKAGE TO FIT YOUR NEEDS?", answer: "Absolutely! All packages can be tailored to your preferences and requirements." },
  { question: "HOW SOON AFTER THE EVENT WILL I RECEIVE YOUR PHOTOS?", answer: "Typically, you will receive your photos within 4-6 weeks after the event." },
];

function ServicesFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.titles}>
        <h2 className={styles.title}>FAQ</h2>
        <span className={styles.subTitle}>Any Queries?</span>
      </div>

      <div className={styles.faqList}>
        {faqData.map((item, i) => (
          <div key={i} className={styles.faqItem}>
            <button className={styles.question} onClick={() => toggleFAQ(i)}>
              <span className={styles.plus}>+</span>
              {item.question}
            </button>
            {activeIndex === i && <p className={styles.answer}>{item.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesFAQ;
