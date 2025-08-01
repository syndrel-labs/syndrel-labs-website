'use client';

import { useEffect, useState } from 'react';
import styles from './IssuesSection.module.css';

const IssuesSection = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  const lines = [
    "We build a modular SDK that enables agents to learn to optimally coordinate, adapt, and communicate in real time.",
    "Our research addresses the core challenge of distributed intelligence: how autonomous agents can construct and evolve communication protocols under real-world constraints.",
    "From drone swarms to power grids, our framework allows agents to not only act but to negotiate structure, exchange information, and align behavior in dynamic environments.",
    "Our SDK is the first to fuse multi-agent reinforcement learning with topological learning structures, enabling systems that aren't just smart but structurally aware.",
    "Coordination isn't a downstream detail. It's the central problem of the next generation of systems. It's about architecture. It's about learning how to operate as a team."
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
        <h2 className={styles.title}>our_mission_</h2>

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
