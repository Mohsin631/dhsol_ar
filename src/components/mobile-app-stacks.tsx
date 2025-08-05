import React from 'react';
import { techStacks } from './techStackData';
import styles from './services-page-stacks.module.css';

const OurTechStacksWithLogos = () => {
  // Select the third category (Mobile App Development)
  const thirdCategory = techStacks[2];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>تقنياتنا المستخدمة</h2>
      <div className={styles.categoryBlock}>
        <h3 className={styles.categoryTitle}>{thirdCategory.category}</h3>
        <div className={styles.stackGrid}>
          {thirdCategory.stacks.map((stack, i) => (
            <div key={i} className={styles.stackItem}>
              <i className={`${stack.icon} ${styles.icon}`}></i>
              <span>{stack.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTechStacksWithLogos;
