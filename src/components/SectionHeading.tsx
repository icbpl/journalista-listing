
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
    <div className={cn('mb-8', alignmentClasses[alignment], className)}>
      <h2 className="text-2xl font-serif mb-1 font-medium">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 text-sm">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
