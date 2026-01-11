import React from 'react';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  href?: string;
}

import { motion } from 'framer-motion';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, className, href, ...props }, ref) => {
    const baseClasses = 'btn';
    const variantClasses = {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      ghost: 'btn-ghost',
    };
    const sizeClasses = {
      sm: 'btn-sm',
      md: 'btn-md',
      lg: 'btn-lg',
    };

    const classes = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      'cursor-pointer transition-all duration-200',
      className
    );

    if (href) {
      return (
        <motion.a 
          href={href} 
          className={classes}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button 
        ref={ref} 
        className={classes} 
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...props as any}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
