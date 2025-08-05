import React from 'react';
import { techStacks } from './techStackData';
import styles from './services-page-stacks.module.css';

const OurTechStacksWithLogos = () => {
  // Select the eighth category (QA & Testing)
  const eighthCategory = techStacks[7];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>تقنياتنا المستخدمة</h2>
      <div className={styles.categoryBlock}>
        <h3 className={styles.categoryTitle}>{eighthCategory.category}</h3>
        <div className={styles.stackGrid}>
          {eighthCategory.stacks.map((stack, i) => (
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
