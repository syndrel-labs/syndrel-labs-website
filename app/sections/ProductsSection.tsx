import styles from './ProductsSection.module.css';

const products = [
  {
    id: 1,
    name: 'syndrel_lattice',
    description:
      'Coordination protocol runtime for distributed multi-agent systems.',
    category: 'Coordination',
    status: 'Beta',
    features: [
      'Graph-based topology',
      'Realtime reconfiguration',
      'Modular agent interface',
    ],
  },
  {
    id: 2,
    name: 'syndrel_fiber',
    description:
      'Adaptive communication fabric with dynamic topology learning.',
    category: 'Messaging',
    status: 'Coming Soon',
    features: [
      'Learned channel routing',
      'Topology-sensitive messaging',
      'Inter-agent bandwidth shaping',
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
      'Failover-safe delegation',
      'Composable policies',
    ],
  },
  {
    id: 4,
    name: 'syndrel_nas',
    description:
      'Multi-agent neural architecture search with communication-optimized agents.',
    category: 'Architecture',
    status: 'Coming Soon',
    features: [
      'Distributed NAS agents',
      'Multi-objective tuning',
      'Auto-learned training graphs',
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
                  <button className={styles.button}>Docs</button>
                  <button className={`${styles.button} ${styles.primaryButton}`}>Demo</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <button className={styles.footerButton}>
            full module list_
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection;
