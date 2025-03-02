
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
    <div className={cn('mb-10 relative', alignmentClasses[alignment], className)}>
      <h2 className="text-3xl font-serif mb-3 font-medium relative inline-block">
        {title}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-journal-accent opacity-20 rounded"></span>
      </h2>
      {subtitle && (
        <p className="text-journal-muted max-w-2xl mx-auto text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
