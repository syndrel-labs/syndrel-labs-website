import styles from './ResearchSection.module.css';

const ResearchSection = () => {
  const researchAreas = [
    {
      id: 1,
      title: 'Topological MARL',
      description: 'Multi-agent reinforcement learning structured by the geometric and categorical foundations of space, flow, and compositional reasoning.',
      focus: [
        'Topological Abstractions for Coordination',
        'Geometric Learning in Multi-Agent Systems',
        'Categorical Structures in Policy Composition'
      ],
      publications: 12,
      status: 'Active'
    },
    {
      id: 2,
      title: 'Neural Architecture Search',
      description: 'Teams of intelligent agents co-develop novel deep learning architectures through specialized design roles.',
      focus: ['Collaborative Model Construction', 'Agent-Driven Architecture Design', 'Role-Based Optimization'],
      publications: 8,
      status: 'Active'
    },
    {
      id: 3,
      title: 'Quantum Information and Nanosystems',
      description: 'Multi-objective architecture search for nanoscale systems and quantum information processing.',
      focus: [
        'Quantum-Classical Co-Design',
        'Nanoscale Architecture Optimization',
        'Integrated System-Level Design'
      ],
      publications: 15,
      status: 'Active'
    },
    {
      id: 4,
      title: 'AI-Orchestrated Interaction with Securities Master Systems',
      description: 'A multi-paradigm AI system designed to streamline securities research through structured reasoning and intelligent data access.',
      focus: [
          'Analyst-Centric Data Interfaces',
          'Intelligent Reference Data Access',
          'Context-Aware Knowledge Exploration for Financial Instruments'
        ],
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
                <div className={styles.titleRow}>
                  <h3 className={styles.areaTitle}>{area.title}</h3>
                  <span className={styles.statusBadge}>{area.status}</span>
                </div>
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

        {/* <div className={styles.stats}>
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>4</div>
              <div className={styles.statLabel}>research_areas</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>∞</div>
              <div className={styles.statLabel}>possibilities</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>→</div>
              <div className={styles.statLabel}>future_work</div>
            </div>
          </div>

          <button className={styles.exploreButton}>
            [ join_research ]
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default ResearchSection;
