
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AdPlaceholderProps {
  className?: string;
  format?: 'banner' | 'rectangle' | 'leaderboard' | 'large-mobile' | 'sticky-sidebar';
  position?: 'inline' | 'sidebar' | 'sticky-bottom' | 'sticky-top';
}

const AdPlaceholder = ({ 
  className, 
  format = 'rectangle', 
  position = 'inline' 
}: AdPlaceholderProps) => {
  const adRef = useRef<HTMLDivElement>(null);
  
  // Size mapping based on common ad formats
  const formatSizes = {
    banner: 'h-[60px] w-full md:h-[90px]', // Standard banner, taller on desktop
    rectangle: 'h-[250px] w-[300px] mx-auto', // Medium rectangle (300x250)
    leaderboard: 'h-[90px] w-full', // Leaderboard (728x90)
    'large-mobile': 'h-[100px] w-full sm:h-[250px]', // Larger on mobile
    'sticky-sidebar': 'h-[600px] w-[160px] hidden lg:block' // Skyscraper for desktop sidebar
  };

  // Position styles
  const positionStyles = {
    inline: '',
    sidebar: 'lg:sticky lg:top-24',
    'sticky-bottom': 'sticky bottom-0 z-10',
    'sticky-top': 'sticky top-20 z-10'
  };

  useEffect(() => {
    // This is where you would normally initialize AdSense
    // For example: (window.adsbygoogle = window.adsbygoogle || []).push({});
    
    // For now, we're just creating a placeholder
    console.log('Ad placeholder mounted - would initialize AdSense here');
    
    return () => {
      console.log('Ad placeholder unmounted - would clean up AdSense here');
    };
  }, []);

  return (
    <div 
      ref={adRef}
      className={cn(
        'bg-gray-100 flex items-center justify-center border border-dashed border-gray-300', 
        formatSizes[format], 
        positionStyles[position], 
        className
      )}
      data-ad-placeholder="true"
      data-ad-format={format}
      data-ad-position={position}
    >
      <p className="text-sm text-gray-400">Ad Space</p>
    </div>
  );
};

export default AdPlaceholder;
