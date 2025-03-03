
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ArticleCard from '@/components/ArticleCard';
import AdPlaceholder from '@/components/AdPlaceholder';
import { getLatestArticles } from '@/lib/data';

const LatestArticlesSection = () => {
  const [latestArticles, setLatestArticles] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate data loading with a slight delay for animation effect
    const timer = setTimeout(() => {
      setLatestArticles(getLatestArticles());
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading 
          title="Latest Articles" 
          subtitle="Our most recent scholarly discoveries across all disciplines"
        />
        
        <div className="flex flex-col lg:flex-row">
          {/* Main content */}
          <div className="lg:w-3/4 lg:pr-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loaded && latestArticles.slice(0, 4).map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
            
            {/* In-feed ad */}
            <div className="my-8">
              <AdPlaceholder format="rectangle" position="inline" />
            </div>
            
            <div className="text-center mt-8">
              <Link to="/" className="inline-flex items-center text-gray-800 hover:text-gray-600 text-sm group">
                <span className="mr-2">View all articles</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          {/* Sidebar ad - Desktop only */}
          <div className="hidden lg:block lg:w-1/4 pl-6">
            <AdPlaceholder format="rectangle" position="sidebar" className="mb-6" />
            <AdPlaceholder format="rectangle" position="sidebar" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestArticlesSection;
