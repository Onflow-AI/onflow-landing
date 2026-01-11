import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  containerClassName,
  id,
}) => {
  return (
    <section id={id} className={cn('section-padding', className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
};
