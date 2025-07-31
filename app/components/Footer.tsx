import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main content grid */}
        <div className={styles.mainContent}>
          {/* Company section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>syndrel_labs</h3>
            <p className={styles.description}>
              modular systems for multi-agent learning and coordination across distributed environments.
            </p>
            <div className={styles.buttons}>
              <a href="mailto:contact@syndrel.com" className={styles.button}>[contact_]</a>
              <a href="mailto:jobs@syndrel.com" className={styles.button}>[careers_]</a>
            </div>
          </div>

          {/* Sections */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>sections_</h3>
            <div className={styles.links}>
              <a href="#issues" className={styles.link}>issues</a>
              <a href="#products" className={styles.link}>products</a>
              <a href="#research" className={styles.link}>research</a>
              <a href="#company" className={styles.link}>company</a>
            </div>
          </div>

          {/* Legal */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>legal_</h3>
            <div className={styles.links}>
              <a href="/privacy" className={styles.link}>privacy_policy</a>
              <a href="/terms" className={styles.link}>terms_of_service</a>
              <a href="/cookies" className={styles.link}>cookie_policy</a>
            </div>
          </div>
        </div>

        {/* Bottom border and copyright */}
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            © 2025 syndrel_labs — all transmissions encrypted.
          </div>
          <div className={styles.bottomLinks}>
            <a href="#github" className={styles.link}>[ github ]</a>
            <a href="#pgp" className={styles.link}>[ pgp ]</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
