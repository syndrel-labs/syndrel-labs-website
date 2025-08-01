'use client';

import styles from './Navbar.module.css';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          syndrel_labs
        </div>

        <div className={styles.navLinks}>
          <button
            onClick={() => scrollToSection('products')}
            className={styles.navLink}
          >
            modules_
            <div className={styles.underline} />
          </button>
          <button
            onClick={() => scrollToSection('research')}
            className={styles.navLink}
          >
            research_
            <div className={styles.underline} />
          </button>
          <button
            onClick={() => scrollToSection('company')}
            className={styles.navLink}
          >
            company_
            <div className={styles.underline} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
