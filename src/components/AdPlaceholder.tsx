
import { useEffect, useRef } from 'react';

interface AdPlaceholderProps {
  className?: string;
  format?: 'banner' | 'rectangle' | 'leaderboard';
}

const AdPlaceholder = ({ className, format = 'rectangle' }: AdPlaceholderProps) => {
  const adRef = useRef<HTMLDivElement>(null);
  
  // Size mapping based on common ad formats
  const formatSizes = {
    banner: 'h-[60px] w-full', // Standard banner (468x60)
    rectangle: 'h-[250px] w-[300px] mx-auto', // Medium rectangle (300x250)
    leaderboard: 'h-[90px] w-full' // Leaderboard (728x90)
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
      className={`bg-gray-100 flex items-center justify-center border border-dashed border-gray-300 ${formatSizes[format]} ${className}`}
      data-ad-placeholder="true"
    >
      <p className="text-sm text-gray-400">Ad Space</p>
    </div>
  );
};

export default AdPlaceholder;
