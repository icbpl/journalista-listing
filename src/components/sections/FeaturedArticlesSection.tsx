
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AdPlaceholder from '@/components/AdPlaceholder';

const FeaturedArticlesSection = () => {
  return (
    <section className="py-12 bg-gray-50 border-t border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        {/* Native ad placement that looks like content */}
        <div className="mb-8 p-2 bg-white border border-gray-200">
          <p className="text-xs text-gray-500 mb-1">SPONSORED</p>
          <AdPlaceholder format="leaderboard" position="inline" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 bg-white p-5 border border-gray-200">
            <h3 className="text-lg font-serif mb-2">Ecosystems</h3>
            <p className="text-xs text-gray-500 mb-1">NEW CONCEPT • JAN 13, 2023</p>
            <p className="text-sm text-gray-600 mb-3">Fresh research delving into accelerating biodiversity loss across multiple frequency and scale models.</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">By Prof. Richard Hamilton</span>
              <Link to="/" className="text-xs flex items-center text-gray-800 hover:text-gray-600">Read More</Link>
            </div>
          </div>

          <div className="col-span-1 bg-white p-5 border border-gray-200">
            <h3 className="text-lg font-serif mb-2">CERN</h3>
            <p className="text-xs text-gray-500 mb-1">UPDATE • APR 18, 2023</p>
            <p className="text-sm text-gray-600 mb-3">Scientists at CERN have unearthed a new understanding of particle interactions in quantum mechanics.</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">By Dr. Lisa Wang</span>
              <Link to="/" className="text-xs flex items-center text-gray-800 hover:text-gray-600">Read More</Link>
            </div>
          </div>

          <div className="col-span-1 bg-white p-5 border border-gray-200">
            <h3 className="text-lg font-serif mb-2">Endurance</h3>
            <p className="text-xs text-gray-500 mb-1">RESEARCH • JUN 30, 2023</p>
            <p className="text-sm text-gray-600 mb-3">A comprehensive study evaluating the relationship between sleep quality and athletic recovery.</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">By Dr. Carlos Martinez</span>
              <Link to="/" className="text-xs flex items-center text-gray-800 hover:text-gray-600">Read More</Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link to="/" className="inline-flex items-center text-gray-800 hover:text-gray-600 text-sm group">
            <span className="mr-2">View all Science Journals articles</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticlesSection;
