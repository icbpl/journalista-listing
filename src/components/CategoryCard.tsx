
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  name: string;
  description: string;
  articleCount: number;
}

const CategoryCard = ({ name, description, articleCount }: CategoryCardProps) => {
  return (
    <div className="journal-card h-full flex flex-col">
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-serif mb-2">{name}</h3>
        <p className="text-sm text-journal-muted mb-3">{description}</p>
        <p className="text-sm text-journal-text mb-4">{articleCount} articles</p>
        <div className="mt-auto">
          <Link to="/" className="read-more-link group">
            Browse articles
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
