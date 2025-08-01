import React from 'react';
import styles from './dialog.module.css';

interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

const Dialog = ({ open, onOpenChange, children }: DialogProps) => {
  if (!open) return null;

  return (
    <div className={styles.dialog}>
      <div
        className={styles.dialogOverlay}
        onClick={() => onOpenChange?.(false)}
      />
      <div className={styles.dialogContent}>
        {children}
      </div>
    </div>
  );
};

interface DialogTriggerProps {
  children: React.ReactNode;
}

const DialogTrigger = ({ children }: DialogTriggerProps) => {
  return <>{children}</>;
};

interface DialogContentProps {
  children: React.ReactNode;
  className?: string;
}

const DialogContent = ({ children, className = '' }: DialogContentProps) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

interface DialogHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const DialogHeader = ({ children, className = '' }: DialogHeaderProps) => {
  return (
    <div className={`${styles.dialogHeader} ${className}`}>
      {children}
    </div>
  );
};

interface DialogTitleProps {
  children: React.ReactNode;
  className?: string;
}

const DialogTitle = ({ children, className = '' }: DialogTitleProps) => {
  return (
    <h2 className={`${styles.dialogTitle} ${className}`}>
      {children}
    </h2>
  );
};

interface DialogDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const DialogDescription = ({ children, className = '' }: DialogDescriptionProps) => {
  return (
    <p className={`${styles.dialogDescription} ${className}`}>
      {children}
    </p>
  );
};

interface DialogFooterProps {
  children: React.ReactNode;
  className?: string;
}

const DialogFooter = ({ children, className = '' }: DialogFooterProps) => {
  return (
    <div className={`${styles.dialogFooter} ${className}`}>
      {children}
    </div>
  );
};

Dialog.displayName = 'Dialog';
DialogTrigger.displayName = 'DialogTrigger';
DialogContent.displayName = 'DialogContent';
DialogHeader.displayName = 'DialogHeader';
DialogTitle.displayName = 'DialogTitle';
DialogDescription.displayName = 'DialogDescription';
DialogFooter.displayName = 'DialogFooter';

export { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger };
export type { DialogContentProps, DialogDescriptionProps, DialogFooterProps, DialogHeaderProps, DialogProps, DialogTitleProps, DialogTriggerProps };

