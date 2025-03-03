
import AdPlaceholder from '@/components/AdPlaceholder';

interface MobileAdsProps {
  position: 'top' | 'bottom';
}

const MobileAds = ({ position }: MobileAdsProps) => {
  if (position === 'top') {
    return (
      <div className="md:hidden py-2 bg-white border-b border-gray-200">
        <div className="container px-4 mx-auto">
          <AdPlaceholder format="large-mobile" position="inline" />
        </div>
      </div>
    );
  }
  
  return (
    <div className="md:hidden sticky bottom-0 z-10 w-full bg-white shadow-md border-t border-gray-200">
      <AdPlaceholder format="banner" position="sticky-bottom" />
    </div>
  );
};

export default MobileAds;
