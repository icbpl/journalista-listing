
import { Link } from 'react-router-dom';
import AdPlaceholder from '@/components/AdPlaceholder';
import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/lib/data';

const HeroSection = () => {
  return (
    <section className="py-12 bg-gray-50 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-serif font-medium mb-2">
            Journal Categories
          </h1>
          <p className="text-gray-600 text-sm mb-8">
            Curated collection of articles to be explored by academic discipline
          </p>
        </div>
        
        {/* Leaderboard ad before categories */}
        <div className="mb-8">
          <AdPlaceholder format="leaderboard" position="inline" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200 bg-white">
          {categories.map((category) => (
            <CategoryCard 
              key={category.id}
              name={category.name} 
              description={category.description} 
              articleCount={category.articleCount} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
