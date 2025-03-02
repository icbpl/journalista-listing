
import { Link } from 'react-router-dom';
import { Article } from '@/lib/data';

interface ArticleCardProps {
  article: Article;
  index?: number;
  compact?: boolean;
}

const ArticleCard = ({ article, index = 0, compact = false }: ArticleCardProps) => {
  return (
    <div className={`border-t border-gray-200 py-5 ${compact ? '' : 'mb-5'}`}>
      <div className="flex flex-col">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs uppercase text-gray-500">{article.category}</span>
          <span className="text-xs text-gray-500">{article.date}</span>
        </div>
        
        <h3 className={`${compact ? 'text-base' : 'text-xl'} font-medium mb-2 font-serif`}>
          <Link to="/" className="hover:text-gray-600">{article.title}</Link>
        </h3>
        
        <p className="text-sm text-gray-600 mb-3">{article.excerpt}</p>
        
        <div className="mt-auto">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">By {article.author}</span>
            <Link to="/" className="text-xs flex items-center text-gray-800 hover:text-gray-600">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
