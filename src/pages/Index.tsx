
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import Header from '@/components/Header';
import SectionHeading from '@/components/SectionHeading';
import CategoryCard from '@/components/CategoryCard';
import ArticleCard from '@/components/ArticleCard';
import Footer from '@/components/Footer';

import { categories, getLatestArticles, getTechnologyArticles } from '@/lib/data';

const Index = () => {
  const [latestArticles, setLatestArticles] = useState([]);
  const [techArticles, setTechArticles] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate data loading with a slight delay for animation effect
    const timer = setTimeout(() => {
      setLatestArticles(getLatestArticles());
      setTechArticles(getTechnologyArticles());
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-journal-background py-16 md:py-24">
          <div className="journal-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 leading-tight">
                Journal Categories
              </h1>
              <p className="text-journal-muted text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Curated collection of articles to be explored by academic discipline
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {categories.map((category, index) => (
                <div 
                  key={category.id} 
                  className="slide-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CategoryCard 
                    name={category.name} 
                    description={category.description} 
                    articleCount={category.articleCount} 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Articles Section */}
        <section className="journal-section bg-white">
          <div className="journal-container">
            <SectionHeading 
              title="Latest Articles" 
              subtitle="Our most recent scholarly discoveries across all disciplines"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loaded && latestArticles.slice(0, 3).map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/" className="inline-flex items-center text-journal-accent hover:text-journal-text group">
                <span className="mr-2">View all articles</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Technology Journals Section */}
        <section className="journal-section bg-journal-background">
          <div className="journal-container">
            <SectionHeading 
              title="Technology Journals" 
              subtitle="Innovation and breakthroughs in computing, engineering, and digital systems"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loaded && techArticles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/" className="inline-flex items-center text-journal-accent hover:text-journal-text group">
                <span className="mr-2">View all technology articles</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Featured Articles Grid */}
        <section className="journal-section bg-white">
          <div className="journal-container">
            <SectionHeading 
              title="Featured Research" 
              subtitle="Explore our selection of impactful and innovative studies"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="journal-card h-full">
                  <div className="card-image-container mb-4 rounded-md overflow-hidden aspect-video">
                    <img 
                      src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80" 
                      alt="Digital humanities research" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="article-category">Humanities</span>
                    <span className="text-xs text-journal-muted">Jun 8, 2023</span>
                  </div>
                  <h3 className="text-2xl font-medium mb-2 font-serif">
                    <Link to="/" className="hover:text-journal-accent">
                      Digital Humanities: Preserving Cultural Heritage in the Digital Age
                    </Link>
                  </h3>
                  <p className="text-journal-muted mb-4">
                    How emerging technologies are revolutionizing the preservation, analysis, and accessibility of cultural artifacts and historical materials in ways never before possible.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-journal-muted">By Prof. Eleanor Davidson</span>
                    <Link to="/" className="read-more-link">Read More</Link>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-1 flex flex-col space-y-6">
                {loaded && latestArticles.slice(3, 5).map((article) => (
                  <div key={article.id} className="journal-card h-full flex-grow">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="article-category">{article.category}</span>
                      <span className="text-xs text-journal-muted">{article.date}</span>
                    </div>
                    <h3 className="text-lg font-medium mb-2 line-clamp-2 font-serif">
                      <Link to="/" className="hover:text-journal-accent">{article.title}</Link>
                    </h3>
                    <p className="text-sm text-journal-muted mb-4 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-journal-muted">By {article.author}</span>
                      <Link to="/" className="read-more-link text-xs">Read More</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
