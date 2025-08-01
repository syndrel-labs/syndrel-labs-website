import styles from './ProductsSection.module.css';

const products = [
  {
    id: 1,
    name: 'syndrel_lattice',
    description:
      'Coordination and consensus protocol for distributed multi-agent systems.',
    category: 'Coordination',
    status: 'Beta',
          features: [
        'Dynamic communication topology',
        'Local-to-global consensus',
        'Emergent coordination patterns',
      ],
  },
  {
    id: 2,
    name: 'syndrel_fiber',
    description:
      'Secure, decentralized message fabric with adversary-aware routing.',
    category: 'Messaging',
    status: 'Coming Soon',
          features: [
        'Threat-adaptive routing architecture',
        'Autonomous interference response system',
        'Decentralized fault recovery',
      ],
  },
  {
    id: 3,
    name: 'syndrel_strata',
    description:
      'Layered control for mission-critical, multi-level agent orchestration.',
    category: 'Control',
    status: 'Coming Soon',
    features: [
      'Hierarchical task scheduling',
      'Dynamic command reshaping under disrupted chains',
      'Composable policies',
    ],
  },
  {
    id: 4,
    name: 'syndrel_nas',
    description:
      'Multi-agent neural architecture search with distributed design specialists.',
    category: 'Architecture',
    status: 'Coming Soon',
    features: [
      'Distributed NAS agents',
      'Multi-objective tuning',
      'Emergent training structures',
    ],
  },
]

const ProductsSection = () => {
  return (
    <section id="products" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>modules_</h2>
          <p className={styles.description}>
            Modular systems for emergent coordination, messaging, and learning in distributed environments.
          </p>
        </div>

        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.badges}>
                  <span className={styles.categoryBadge}>{product.category}</span>
                  <span className={`${styles.statusBadge} ${styles[product.status.toLowerCase().replace(' ', '')]}`}>
                    {product.status}
                  </span>
                </div>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productDescription}>
                  {product.description}
                </p>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.capabilities}>
                  <p className={styles.capabilitiesTitle}>capabilities_</p>
                  <ul className={styles.featuresList}>
                    {product.features.map((feature, index) => (
                      <li key={index} className={styles.feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.actions}>
                  <button className={styles.button}>Whitepaper</button>
                  <button className={`${styles.button} ${styles.primaryButton}`}>Demo</button>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}

export default ProductsSection;
