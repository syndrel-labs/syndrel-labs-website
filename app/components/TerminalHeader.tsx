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

  useEffect(() => {
    const products = ['lattice', 'fiber', 'strata'];
    if (phase === 'complete') return;

    const timeout = setTimeout(() => {
      switch (phase) {
        case 'initial':
          // Type "syndrel_labs"
          const fullText = 'syndrel_labs';
          if (currentIndex < fullText.length) {
            setDisplayText(fullText.slice(0, currentIndex + 1));
            setCurrentIndex(currentIndex + 1);
          } else {
            // Wait, then start deleting "_labs"
            setTimeout(() => {
              setPhase('deleting');
            }, 1000);
          }
          break;

        case 'deleting':
          // Delete "_labs" to get back to "syndrel"
          if (displayText.length > baseText.length) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setPhase('products');
            setCurrentIndex(baseText.length);
          }
          break;

        case 'products':
          // Cycle through products once
          const currentProduct = products[productIndex];
          const targetText = baseText + currentProduct;

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
          break;

        case 'final':
          // Type "labs" one final time
          const finalText = 'syndrel_labs';
          if (currentIndex < finalText.length) {
            setDisplayText(finalText.slice(0, currentIndex + 1));
            setCurrentIndex(currentIndex + 1);
          } else {
            setPhase('complete');
            setShowCursor(false);
            onTypingComplete?.();
          }
          break;
      }
    }, phase === 'deleting' ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, phase, productIndex, displayText, onTypingComplete]);

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
