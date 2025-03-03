
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  alignment?: 'left' | 'center' | 'right';
  withAdSpace?: boolean;
  children?: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  className,
  alignment = 'center',
  withAdSpace = false,
  children,
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={cn(
      'mb-8', 
      withAdSpace ? 'flex flex-col lg:flex-row lg:items-center lg:justify-between' : '',
      alignmentClasses[alignment], 
      className
    )}>
      <div className={withAdSpace ? 'mb-4 lg:mb-0' : ''}>
        <h2 className="text-2xl font-serif mb-1 font-medium">
          {title}
        </h2>
        {subtitle && (
          <p className="text-gray-600 text-sm">
            {subtitle}
          </p>
        )}
      </div>
      {withAdSpace && (
        <div className="hidden md:block">
          {/* This is where an ad can be placed next to a section title */}
          {children}
        </div>
      )}
    </div>
  );
};

export default SectionHeading;
