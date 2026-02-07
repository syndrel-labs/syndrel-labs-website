'use client';

import { useEffect, useState } from 'react';
import styles from './TerminalHeader.module.css';

interface TerminalHeaderProps {
  onTypingComplete?: () => void;
}

const TerminalHeader = ({ onTypingComplete }: TerminalHeaderProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<'initial' | 'deleting' | 'products' | 'final' | 'complete'>('initial');
  const [productIndex, setProductIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const baseText = 'syndrel_';

  // Initial typing effect - start with syndrel_obi
  useEffect(() => {
    if (phase !== 'initial') return;

    const initialText = 'syndrel_obi';
    const timeout = setTimeout(() => {
      if (currentIndex < initialText.length) {
        setDisplayText(initialText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        // Wait, then start deleting
        setTimeout(() => {
          setPhase('deleting');
        }, 1000);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, phase]);

  // Deleting effect
  useEffect(() => {
    if (phase !== 'deleting') return;

    const timeout = setTimeout(() => {
      if (displayText.length > baseText.length) {
        setDisplayText(displayText.slice(0, -1));
      } else {
        setPhase('products');
        setCurrentIndex(baseText.length);
      }
    }, 50);

    return () => clearTimeout(timeout);
  }, [displayText, phase]);

  // Products cycling effect
  useEffect(() => {
    if (phase !== 'products') return;

    const products = ['fiber', 'strata'];
    const currentProduct = products[productIndex];
    const targetText = baseText + currentProduct;

    const timeout = setTimeout(() => {
      if (currentIndex < targetText.length) {
        setDisplayText(targetText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        // Wait, then delete current product
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            setDisplayText(prev => {
              if (prev.length <= baseText.length) {
                clearInterval(deleteInterval);

                if (productIndex < products.length - 1) {
                  // Move to next product
                  setProductIndex(productIndex + 1);
                  setCurrentIndex(baseText.length);
                } else {
                  // All products shown, now type final "labs"
                  setPhase('final');
                  setCurrentIndex(baseText.length);
                }
                return prev;
              }
              return prev.slice(0, -1);
            });
          }, 50);
        }, 1500);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, phase, productIndex]);

  // Final typing effect
  useEffect(() => {
    if (phase !== 'final') return;

    const finalText = 'syndrel_labs';
    const timeout = setTimeout(() => {
      if (currentIndex < finalText.length) {
        setDisplayText(finalText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        setPhase('complete');
        setShowCursor(false);
        onTypingComplete?.();
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, phase, onTypingComplete]);

  return (
    <div className={styles.container}>
      <div className={styles.terminalText}>
        <span className={styles.text}>{displayText}</span>
        {showCursor && <span className={styles.cursor}>█</span>}
      </div>
    </div>
  );
};

export default TerminalHeader;
