
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="journal-container py-4 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl font-medium tracking-tight transform transition-transform hover:scale-105">
          Journal Archives
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-journal-text hover:text-journal-accent transition-colors">Home</Link>
          <Link to="/" className="text-journal-text hover:text-journal-accent transition-colors">Science</Link>
          <Link to="/" className="text-journal-text hover:text-journal-accent transition-colors">Technology</Link>
          <Link to="/" className="text-journal-text hover:text-journal-accent transition-colors">Medicine</Link>
          <Link to="/" className="text-journal-text hover:text-journal-accent transition-colors">Humanities</Link>
        </nav>
        
        <div className="block md:hidden">
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
