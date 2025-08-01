import styles from './CompanySection.module.css';

const CompanySection = () => {
  const values = [
    {
      id: 1,
      title: 'innovation_',
      description: 'Building systems that solve real problems.'
    },
    {
      id: 2,
      title: 'impact_',
      description: 'Delivering measurable results in critical domains.'
    },
    {
      id: 3,
      title: 'integrity_',
      description: 'Transparent, accountable, and reliable systems.'
    },
    {
      id: 4,
      title: 'collaboration_',
      description: 'Partnering with researchers and institutions to advance the field.'
    }
  ];

  const fieldsOfInterest = [
    { label: 'ew_advantage', value: 'defense' },
    { label: 'autonomous_systems', value: 'robotics' },
    { label: 'intelligent_exploration', value: 'finance' },
    { label: 'info_and_nanosystems', value: 'quantum' }
  ];

  return (
    <section id="company" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>company_</h2>
          <p className={styles.description}>
            Our work explores the mathematical and computational structures that enable intelligent behavior in complex, distributed environments.
          </p>
        </div>

        {/* Mission Statement */}
        <div className={styles.mission}>
          <div className={styles.missionContent}>
            <h3 className={styles.missionTitle}>mission_</h3>
            <p className={styles.missionText}>
              Syndrel Labs exists to ensure the world&apos;s most critical systems can adapt, coordinate, and endure in the face of uncertainty. We believe that solving humanity&apos;s most complex challenges requires collective intelligence, where systems learn to work together. Our mission is to advance this frontier by developing technologies that unlock resilient, sustainable, and intelligent coordination across the infrastructures that matter most.
            </p>
          </div>
        </div>

        {/* Company Values */}
        <div className={styles.values}>
          <h3 className={styles.valuesTitle}>values_</h3>
          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <div key={value.id} className={styles.valueCard}>
                <h4 className={styles.valueTitle}>{value.title}</h4>
                <p className={styles.valueDescription}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fields of Interest */}
        <div className={styles.stats}>
          <div className={styles.statsGrid}>
            {fieldsOfInterest.map((field, index) => (
              <div key={index} className={styles.stat}>
                <div className={styles.statNumber}>{field.value}</div>
                <div className={styles.statLabel}>{field.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>contact_</h3>
            <p className={styles.ctaText}>
              We seek collaborators who share our vision for advancing distributed intelligence and coordination systems.
            </p>
            <div className={styles.ctaButtons}>
              <a href="https://github.com/syndrel-labs" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>[ github ]</a>
              <button className={styles.ctaButtonSecondary}>[ contact_us ]</button>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default CompanySection;
