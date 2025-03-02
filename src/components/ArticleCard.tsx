
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Article } from '@/lib/data';

interface ArticleCardProps {
  article: Article;
  index?: number;
}

const ArticleCard = ({ article, index = 0 }: ArticleCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <div 
      className="journal-card h-full flex flex-col slide-in" 
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="card-image-container mb-4 rounded-md overflow-hidden aspect-video bg-gray-100">
        <div className={`relative w-full h-full ${!imageLoaded ? 'image-shimmer' : ''}`}>
          <img
            src={article.image}
            alt={article.title}
            className={`w-full h-full object-cover ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>
      
      <div className="flex-grow flex flex-col">
        <div className="mb-2 flex items-center justify-between">
          <span className="article-category">{article.category}</span>
          <span className="text-xs text-journal-muted">{article.date}</span>
        </div>
        
        <h3 className="text-lg font-medium mb-2 line-clamp-2 font-serif">
          <Link to="/" className="hover:text-journal-accent">{article.title}</Link>
        </h3>
        
        <p className="text-sm text-journal-muted mb-4 line-clamp-2">{article.excerpt}</p>
        
        <div className="mt-auto">
          <div className="flex items-center justify-between">
            <span className="text-xs text-journal-muted">By {article.author}</span>
            <Link to="/" className="read-more-link text-xs">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
