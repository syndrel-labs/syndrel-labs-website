import React from 'react';
import styles from './badge.module.css';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  children: React.ReactNode;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className = '', variant = 'default', children, ...props }, ref) => {
    const baseClasses = styles.badge;

    const variantClasses = {
      default: styles.badgeDefault,
      secondary: styles.badgeSecondary,
      destructive: styles.badgeDestructive,
      outline: styles.badgeOutline
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

    return (
      <div
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
export type { BadgeProps };

