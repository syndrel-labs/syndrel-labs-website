'use client';

import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import TerminalHeader from '@components/TerminalHeader';
import CompanySection from '@sections/CompanySection';
import IssuesSection from '@sections/IssuesSection';
import ProductsSection from '@sections/ProductsSection';
import ResearchSection from '@sections/ResearchSection';
import { useState } from 'react';
import styles from './page.module.css';

const Index = () => {
  const [showSections, setShowSections] = useState(false);

  return (
    <div className={styles.container}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <TerminalHeader onTypingComplete={() => setShowSections(true)} />

          {showSections && (
            <div className={`${styles.fadeInUp} ${styles.scrollIndicator}`}>
              <div className={styles.scrollText}>
                scroll_↓
              </div>
            </div>
          )}
        </div>

        {/* Subtle ambient movement */}
        <div className={styles.ambientContainer}>
          <div className={`${styles.ambientLine} ${styles.ambientLine1}`} />
          <div className={`${styles.ambientLine} ${styles.ambientLine2}`} />
          <div className={`${styles.ambientLine} ${styles.ambientLine3}`} />
        </div>
      </section>

      {/* Content Sections */}
      {showSections && (
        <div className={`${styles.fadeInUp} ${styles.contentSections}`}>
          <IssuesSection />
          <ProductsSection />
          <ResearchSection />
          <CompanySection />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Index;
