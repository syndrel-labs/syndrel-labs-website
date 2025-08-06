import { useEffect, useRef } from 'react';
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
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  // Focus trap utility function
  const trapFocus = (e: KeyboardEvent) => {
    const focusableElements = modalRef.current?.querySelectorAll(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );

    if (!focusableElements || focusableElements.length === 0) return;

    const focusables = Array.from(focusableElements) as HTMLElement[];
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  // Keyboard event handler and scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }

      if (e.key === 'Tab') {
        trapFocus(e);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scrolling
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      // Restore body scrolling
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Store previously focused element and auto-focus first focusable element
  useEffect(() => {
    if (isOpen) {
      // Store the currently focused element before opening modal
      previouslyFocused.current = document.activeElement as HTMLElement;

      // Auto-focus the first focusable element in the modal
      const focusableElements = modalRef.current?.querySelectorAll(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusableElements?.[0] as HTMLElement;
      first?.focus();
    } else {
      // Restore focus when modal closes
      previouslyFocused.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen || !focus) return null;

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="presentation"
      aria-hidden="true"
    >
      <div
        ref={modalRef}
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
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
            <h2 className={styles.sectionTitle}>Significance to Syndrel</h2>
            <div className={styles.contentBlock}>
              <p className={styles.significanceText}>{focus.significance}</p>
            </div>
          </section>

          {/* Publications Section */}
          {focus.publications && focus.publications.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Publications</h2>
              <div className={styles.publicationsList}>
                {focus.publications.map((pub, index) => (
                  <div key={index} className={styles.publicationItem}>
                    <span className={styles.pubNumber}>[{index + 1}]</span>
                    <span className={styles.pubText}>{pub}</span>
                  </div>
                ))}
              </div>
            </section>
          )}


        </div>
      </div>
    </div>
  );
};

export default ResearchModal;
