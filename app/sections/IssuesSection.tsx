'use client';

import { useEffect, useState } from 'react';
import styles from './IssuesSection.module.css';

const IssuesSection = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  const lines = [
    "We build modular systems that learn to coordinate.",
    "Our research explores emergent behavior in distributed agents—drones, traffic systems, power grids.",
    "Our tools learn not only actions, but the protocols by which agents decide and interact.",
    "",
    "This is not about language. It&apos;s about coordination."
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const interval = setInterval(() => {
            setVisibleLines(prev => {
              if (prev < lines.length) {
                return prev + 1;
              }
              clearInterval(interval);
              return prev;
            });
          }, 400);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('issues');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [lines.length]);

  return (
    <section id="issues" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>issues_</h2>

        <div className={styles.content}>
          {lines.map((line, index) => (
            <div
              key={index}
              className={`${styles.line} ${
                index < visibleLines ? styles.visible : styles.hidden
              }`}
            >
              {line && <span className={styles.prompt}>{'>'}</span>} {line}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IssuesSection;
