import styles from './ResearchSection.module.css';

const ResearchSection = () => {
  const researchAreas = [
    {
      id: 1,
      title: 'Topological MARL',
      description: 'Multi-agent reinforcement learning through topological coordination structures.',
      focus: ['Graph Neural Networks', 'Topology Learning', 'Agent Coordination'],
      publications: 12,
      status: 'Active'
    },
    {
      id: 2,
      title: 'Neural Architecture Search via agent teams',
      description: 'Evolutionary approaches to neural network design using coordinated agent populations.',
      focus: ['Evolutionary Algorithms', 'NAS Optimization', 'Agent Teams'],
      publications: 8,
      status: 'Active'
    },
    {
      id: 3,
      title: 'Emergent behavior via sheaf-coordinated dynamics',
      description: 'Mathematical frameworks for understanding emergence in distributed systems.',
      focus: ['Sheaf Theory', 'Emergence', 'Distributed Systems'],
      publications: 15,
      status: 'Active'
    },
    {
      id: 4,
      title: 'Multi-agent coordination protocols',
      description: 'Protocol design for scalable coordination in heterogeneous agent environments.',
      focus: ['Protocol Design', 'Scalability', 'Heterogeneous Agents'],
      publications: 10,
      status: 'Active'
    }
  ];

  return (
    <section id="research" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>research_</h2>
          <p className={styles.description}>
            Mathematical frameworks for understanding emergence in distributed systems.
          </p>
        </div>

        <div className={styles.grid}>
          {researchAreas.map((area) => (
            <div key={area.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.badges}>
                  <span className={styles.statusBadge}>{area.status}</span>
                  <span className={styles.publications}>
                    {area.publications} publications
                  </span>
                </div>
                <h3 className={styles.areaTitle}>{area.title}</h3>
                <p className={styles.areaDescription}>
                  {area.description}
                </p>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.focus}>
                  <h4 className={styles.focusTitle}>research_focus_</h4>
                  <div className={styles.focusTags}>
                    {area.focus.map((item, index) => (
                      <span key={index} className={styles.focusTag}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.actions}>
                  <button className={styles.button}>[ view_publications ]</button>
                  <button className={styles.button}>[ research_team ]</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.stats}>
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>45+</div>
              <div className={styles.statLabel}>research_papers</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>12</div>
              <div className={styles.statLabel}>active_projects</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>8</div>
              <div className={styles.statLabel}>research_partners</div>
            </div>
          </div>

          <button className={styles.exploreButton}>
            [ explore_research ]
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
