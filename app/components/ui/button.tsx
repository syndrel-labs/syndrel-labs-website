import React from 'react';
import styles from './button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'default', children, ...props }, ref) => {
    const baseClasses = styles.btn;

    const variantClasses = {
      default: styles.btnDefault,
      destructive: styles.btnDestructive,
      outline: styles.btnOutline,
      secondary: styles.btnSecondary,
      ghost: styles.btnGhost,
      link: styles.btnLink
    };

    const sizeClasses = {
      default: '',
      sm: styles.btnSm,
      lg: styles.btnLg,
      icon: styles.btnIcon
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };

