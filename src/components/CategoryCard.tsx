
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  name: string;
  description: string;
  articleCount: number;
}

const CategoryCard = ({ name, description, articleCount }: CategoryCardProps) => {
  return (
    <div className="p-5 border-t border-gray-200">
      <h3 className="text-lg font-serif mb-2">{name}</h3>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <p className="text-xs text-gray-500 mb-3">{articleCount} articles</p>
      <Link to="/" className="text-xs flex items-center text-gray-800 hover:text-gray-600 group">
        Browse articles <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
      </Link>
    </div>
  );
};

export default CategoryCard;
