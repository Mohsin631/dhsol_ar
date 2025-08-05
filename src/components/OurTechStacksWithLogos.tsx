import React, { useState } from 'react';
import { techStacks } from './techStackData';
import styles from './OurTechStacksWithLogos.module.css';

const OurTechStacksWithLogos = () => {
  const [activeCategory, setActiveCategory] = useState<string>(techStacks[0]?.category || '');

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.heading}>مجموعات التكنولوجيا الخاصة بنا</h2>
        <p className={styles.subheading}>
          نحن نستخدم أحدث التقنيات والأدوات لتحويل الأفكار إلى واقع.
        </p>
      </div>

      <div className={styles.techStackContainer}>
        <div className={styles.categoryColumn}>
          {techStacks.map((tech) => (
            <div
              key={tech.category}
              className={`${styles.category} ${activeCategory === tech.category ? styles.active : ''}`}
              onMouseEnter={() => setActiveCategory(tech.category)}
              onClick={() => setActiveCategory(tech.category)}
            >
              {tech.category /* You may want to translate these categories inside techStacks data */}
            </div>
          ))}
        </div>

        <div className={styles.stackColumn}>
          {activeCategory && (
            <div className={styles.stackList}>
              {techStacks
                .find((cat) => cat.category === activeCategory)
                ?.stacks.map((stack) => (
                  <div key={stack.name} className={styles.stackItem}>
                    <i className={`${stack.icon} ${styles.icon}`}></i>
                    <span>{stack.name /* Also can translate stack names in techStacks data if needed */}</span>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurTechStacksWithLogos;
