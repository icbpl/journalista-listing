
import AdPlaceholder from '@/components/AdPlaceholder';

const BottomAdBanner = () => {
  return (
    <div className="py-4 bg-gray-50 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <AdPlaceholder format="leaderboard" position="inline" />
      </div>
    </div>
  );
};

export default BottomAdBanner;
