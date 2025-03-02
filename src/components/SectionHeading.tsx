
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  alignment?: 'left' | 'center' | 'right';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  className,
  alignment = 'center',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={cn('mb-10', alignmentClasses[alignment], className)}>
      <h2 className="text-3xl font-serif mb-2">{title}</h2>
      {subtitle && (
        <p className="text-journal-muted max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
