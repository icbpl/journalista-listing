import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="journal-container py-4 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl font-medium tracking-tight transform transition-transform hover:scale-105" aria-label="Journal Archives Home">
          Journal Archives
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-journal-text hover:text-journal-accent transition-colors" aria-label="Browse Home page articles">Home</Link>
          <Link to="/" className="text-journal-text hover:text-journal-accent transition-colors" aria-label="Browse Science category articles">Science</Link>
          <Link to="/" className="text-journal-text hover:text-journal-accent transition-colors" aria-label="Browse Technology category articles">Technology</Link>
          <Link to="/" className="text-journal-text hover:text-journal-accent transition-colors" aria-label="Browse Medicine category articles">Medicine</Link>
          <Link to="/" className="text-journal-text hover:text-journal-accent transition-colors" aria-label="Browse Humanities category articles">Humanities</Link>
        </nav>
        
        <div className="block md:hidden">
          <button 
            className="p-2 text-journal-text hover:text-journal-accent transition-colors" 
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="py-3 px-4 space-y-3">
            <Link 
              to="/" 
              className="block text-journal-text hover:text-journal-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Browse Home page articles"
            >
              Home
            </Link>
            <Link 
              to="/" 
              className="block text-journal-text hover:text-journal-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Browse Science category articles"
            >
              Science
            </Link>
            <Link 
              to="/" 
              className="block text-journal-text hover:text-journal-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Browse Technology category articles"
            >
              Technology
            </Link>
            <Link 
              to="/" 
              className="block text-journal-text hover:text-journal-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Browse Medicine category articles"
            >
              Medicine
            </Link>
            <Link 
              to="/" 
              className="block text-journal-text hover:text-journal-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Browse Humanities category articles"
            >
              Humanities
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;