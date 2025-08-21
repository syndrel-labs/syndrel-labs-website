'use client';

import BaseModal from './BaseModal';
import styles from './SectionDetailsModal.module.css';

interface SectionDetails {
  title: string;
  subtitle: string;
  overview: {
    goals: string[];
    scope: string[];
  };
  researchFocuses: string[];
  deliverables: string[];
  strategicImportance: {
    darpaRelevance: string[];
    dualUse: string[];
  };
  publications?: string[];
}

interface SectionDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  sectionDetails: SectionDetails | null;
}

export default function SectionDetailsModal({ isOpen, onClose, sectionDetails }: SectionDetailsModalProps) {

  if (!isOpen || !sectionDetails) return null;

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      labelledById="section-modal-title"
      describedById="section-modal-description"
      contentClassName={styles.modal}
    >
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.titleBlock}>
              <h2 id="section-modal-title" className={styles.title}>
                {sectionDetails.title}
              </h2>
              <p className={styles.subtitle}>{sectionDetails.subtitle}</p>
            </div>
            <div className={styles.headerControls}>
              <span className={styles.escHint}>[ESC]</span>
              <button
                className={styles.headerCloseButton}
                onClick={onClose}
                aria-label="Close modal"
              >
                <span className={styles.headerCloseIcon}>×</span>
              </button>
            </div>
          </div>
        </div>

        <div id="section-modal-description" className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Section Overview</h3>
            <div className={styles.overviewContent}>
              <div className={styles.goals}>
                <h4>• Goals</h4>
                <ul>
                  {sectionDetails.overview.goals.map((goal, index) => (
                    <li key={index}>{goal}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.scope}>
                <h4>• Scope</h4>
                <ul>
                  {sectionDetails.overview.scope.map((scope, index) => (
                    <li key={index}>{scope}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Research Focuses</h3>
            <div className={styles.researchFocuses}>
              {sectionDetails.researchFocuses.map((focus, index) => (
                <button key={index} className={styles.focusButton}>
                  {focus}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Key Deliverables</h3>
            <ul className={styles.deliverables}>
              {sectionDetails.deliverables.map((deliverable, index) => (
                <li key={index}>{deliverable}</li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Strategic Importance</h3>
            <div className={styles.strategicContent}>
              <div className={styles.darpaRelevance}>
                <h4>• Why DARPA cares</h4>
                <ul>
                  {sectionDetails.strategicImportance.darpaRelevance.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.dualUse}>
                <h4>• Dual-use relevance</h4>
                <ul>
                  {sectionDetails.strategicImportance.dualUse.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          {sectionDetails.publications && sectionDetails.publications.length > 0 && (
            <button className={styles.publicationsButton}>
              [ view_publications ]
            </button>
          )}
          <button className={styles.closeButton} onClick={onClose}>
            [ close_modal ]
          </button>
        </div>
    </BaseModal>
  );
}
