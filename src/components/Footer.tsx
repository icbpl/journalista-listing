
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-journal-border pt-12 pb-6">
      <div className="journal-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-lg font-serif mb-4">Journal Archives</h4>
            <p className="text-sm text-journal-muted mb-4">A collection of scholarly articles curated for academic excellence.</p>
            <div className="flex space-x-4">
              <Link to="/" aria-label="Follow us on Twitter">
                <svg className="h-5 w-5 text-journal-muted hover:text-journal-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </Link>
              <Link to="/" aria-label="Follow us on YouTube">
                <svg className="h-5 w-5 text-journal-muted hover:text-journal-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-journal-muted hover:text-journal-accent transition-colors" aria-label="Browse Science category articles">Science</Link></li>
              <li><Link to="/" className="text-journal-muted hover:text-journal-accent transition-colors" aria-label="Browse Technology category articles">Technology</Link></li>
              <li><Link to="/" className="text-journal-muted hover:text-journal-accent transition-colors" aria-label="Browse Medicine category articles">Medicine</Link></li>
              <li><Link to="/" className="text-journal-muted hover:text-journal-accent transition-colors" aria-label="Browse Humanities category articles">Humanities</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-journal-muted hover:text-journal-accent transition-colors" aria-label="Read submission guidelines">Submission Guidelines</Link></li>
              <li><Link to="/" className="text-journal-muted hover:text-journal-accent transition-colors" aria-label="Learn about our peer review process">Peer Review Process</Link></li>
              <li><Link to="/" className="text-journal-muted hover:text-journal-accent transition-colors" aria-label="View our editorial policies">Editorial Policies</Link></li>
              <li><Link to="/" className="text-journal-muted hover:text-journal-accent transition-colors" aria-label="Read about our publication ethics">Publication Ethics</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Subscribe</h4>
            <p className="text-sm text-journal-muted mb-3">Stay updated with our latest articles.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-3 py-2 border border-journal-border rounded-l-md focus:outline-none focus:ring-1 focus:ring-journal-accent text-sm flex-grow"
                aria-label="Email address"
              />
              <button 
                className="bg-journal-accent text-white px-4 py-2 rounded-r-md text-sm hover:bg-journal-text transition-colors"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-journal-border pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-journal-muted">© 2023 Journal Archives. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="text-xs text-journal-muted hover:text-journal-accent transition-colors" aria-label="Read our privacy policy">Privacy Policy</Link>
            <Link to="/" className="text-xs text-journal-muted hover:text-journal-accent transition-colors" aria-label="Read our terms of service">Terms of Service</Link>
            <Link to="/" className="text-xs text-journal-muted hover:text-journal-accent transition-colors" aria-label="Contact our team">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
