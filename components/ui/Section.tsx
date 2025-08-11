import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'compact' | 'page-break';
}

export function Section({
  children,
  className = '',
  variant = 'default',
}: SectionProps) {
  const baseClasses = 'w-full';

  const variantClasses = {
    default: 'space-y-8',
    compact: 'space-y-4',
    'page-break': 'space-y-8',
  };

  return (
    <section
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </section>
  );
}
