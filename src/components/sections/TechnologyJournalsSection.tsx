
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import AdPlaceholder from '@/components/AdPlaceholder';
import { getTechnologyArticles } from '@/lib/data';

const TechnologyJournalsSection = () => {
  const [techArticles, setTechArticles] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate data loading with a slight delay for animation effect
    const timer = setTimeout(() => {
      setTechArticles(getTechnologyArticles());
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading 
          title="Technology Journals" 
          subtitle="Innovation and breakthroughs in computing, engineering, and digital systems"
          withAdSpace={true}
        >
          <AdPlaceholder format="banner" position="inline" className="hidden lg:block" />
        </SectionHeading>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {loaded && techArticles.map((article, index) => (
            <div key={article.id} className="bg-white p-5 border border-gray-200">
              <p className="text-xs text-gray-500 mb-1">RESEARCH • {article.date}</p>
              <h3 className="text-lg font-serif mb-2">{article.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{article.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">By {article.author}</span>
                <Link to="/" className="text-xs flex items-center text-gray-800 hover:text-gray-600">Read More</Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* In-content ad */}
        <div className="my-8">
          <AdPlaceholder format="leaderboard" position="inline" />
        </div>
        
        <div className="text-center mt-8">
          <Link to="/" className="inline-flex items-center text-gray-800 hover:text-gray-600 text-sm group">
            <span className="mr-2">View all technology articles</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TechnologyJournalsSection;
