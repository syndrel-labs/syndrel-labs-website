import BaseModal from './BaseModal';
import styles from './ResearchModal.module.css';

interface ResearchFocus {
  title: string;
  researchArea: string;
  definition: string;
  overview: string;
  significance: string;
  publications?: string[];
  team?: string[];
}

interface ResearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  focus: ResearchFocus | null;
}

const ResearchModal = ({ isOpen, onClose, focus }: ResearchModalProps) => {
  if (!isOpen || !focus) return null;

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} labelledById="modal-title" describedById="modal-description" contentClassName={styles.modal}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.breadcrumb}>
              <span className={styles.researchArea}>{focus.researchArea}</span>
              <span className={styles.separator}>/</span>
              <span className={styles.focusName}>{focus.title}</span>
            </div>
            <div className={styles.headerControls}>
              <span className={styles.escHint}>[ESC]</span>
              <button
                className={styles.closeButton}
                onClick={onClose}
                aria-label="Close modal"
              >
                <span className={styles.closeIcon}>×</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className={styles.modalContent} id="modal-description">
          {/* Definition Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Definition</h2>
            <div className={styles.contentBlock}>
              <p className={styles.definitionText}>{focus.definition}</p>
            </div>
          </section>

          {/* Overview Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <div className={styles.contentBlock}>
              <p className={styles.overviewText}>{focus.overview}</p>
            </div>
          </section>

          {/* Significance Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Why We Use It</h2>
            <div className={styles.contentBlock}>
              <p className={styles.significanceText}>{focus.significance}</p>
            </div>
          </section>
        </div>
    </BaseModal>
  );
};

export default ResearchModal;
