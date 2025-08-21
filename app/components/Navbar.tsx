'use client';

import { useEffect, useState } from 'react';
import { useMobile } from '../hooks/useMobile';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isMobile = useMobile();

  // Scroll detection for hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar if scrolling up or near the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else {
        // Hide navbar if scrolling down and not near the top
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after clicking a link
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          syndrel_labs
        </div>

        {isMobile ? (
          <>
            <button
              className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
              <button
                onClick={() => scrollToSection('products')}
                className={styles.mobileNavLink}
              >
                modules_
              </button>
              <button
                onClick={() => scrollToSection('research')}
                className={styles.mobileNavLink}
              >
                research_
              </button>
              <button
                onClick={() => scrollToSection('company')}
                className={styles.mobileNavLink}
              >
                company_
              </button>
            </div>
          </>
        ) : (
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
