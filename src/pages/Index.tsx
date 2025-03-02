
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import Header from '@/components/Header';
import SectionHeading from '@/components/SectionHeading';
import CategoryCard from '@/components/CategoryCard';
import ArticleCard from '@/components/ArticleCard';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';

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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
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

        {/* Latest Articles Section */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeading 
              title="Latest Articles" 
              subtitle="Our most recent scholarly discoveries across all disciplines"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {loaded && latestArticles.slice(0, 3).map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link to="/" className="inline-flex items-center text-gray-800 hover:text-gray-600 text-sm group">
                <span className="mr-2">View all articles</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Articles Section */}
        <section className="py-12 bg-gray-50 border-t border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="col-span-1 bg-white p-5 border border-gray-200">
                <h3 className="text-lg font-serif mb-2">Ecosystems</h3>
                <p className="text-xs text-gray-500 mb-1">NEW CONCEPT • JAN 13, 2023</p>
                <p className="text-sm text-gray-600 mb-3">Fresh research delving into accelerating biodiversity loss across multiple frequency and scale models.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">By Prof. Richard Hamilton</span>
                  <Link to="/" className="text-xs flex items-center text-gray-800 hover:text-gray-600">Read More</Link>
                </div>
              </div>

              <div className="col-span-1 bg-white p-5 border border-gray-200">
                <h3 className="text-lg font-serif mb-2">CERN</h3>
                <p className="text-xs text-gray-500 mb-1">UPDATE • APR 18, 2023</p>
                <p className="text-sm text-gray-600 mb-3">Scientists at CERN have unearthed a new understanding of particle interactions in quantum mechanics.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">By Dr. Lisa Wang</span>
                  <Link to="/" className="text-xs flex items-center text-gray-800 hover:text-gray-600">Read More</Link>
                </div>
              </div>

              <div className="col-span-1 bg-white p-5 border border-gray-200">
                <h3 className="text-lg font-serif mb-2">Endurance</h3>
                <p className="text-xs text-gray-500 mb-1">RESEARCH • JUN 30, 2023</p>
                <p className="text-sm text-gray-600 mb-3">A comprehensive study evaluating the relationship between sleep quality and athletic recovery.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">By Dr. Carlos Martinez</span>
                  <Link to="/" className="text-xs flex items-center text-gray-800 hover:text-gray-600">Read More</Link>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link to="/" className="inline-flex items-center text-gray-800 hover:text-gray-600 text-sm group">
                <span className="mr-2">View all Science Journals articles</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Ad Banner */}
        <div className="py-4 bg-white border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4">
            <AdPlaceholder format="leaderboard" />
          </div>
        </div>

        {/* Technology Journals Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeading 
              title="Technology Journals" 
              subtitle="Innovation and breakthroughs in computing, engineering, and digital systems"
            />
            
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
            
            <div className="text-center mt-8">
              <Link to="/" className="inline-flex items-center text-gray-800 hover:text-gray-600 text-sm group">
                <span className="mr-2">View all technology articles</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Humanities Section */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="col-span-1">
                <h3 className="text-lg font-serif mb-2">Digital Humanities: Preserving Cultural Heritage</h3>
                <p className="text-xs text-gray-500 mb-1">RESEARCH • JUN 8, 2023</p>
                <p className="text-sm text-gray-600 mb-3">How digital technologies are transforming the preservation and study of historical artifacts.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">By Prof. Eleanor Davidson</span>
                  <Link to="/" className="text-xs flex items-center text-gray-800 hover:text-gray-600">Read More</Link>
                </div>
              </div>

              <div className="col-span-1">
                <h3 className="text-lg font-serif mb-2">The Evolution of Linguistic Structures in Social Media</h3>
                <p className="text-xs text-gray-500 mb-1">ANALYSIS • MAY 22, 2023</p>
                <p className="text-sm text-gray-600 mb-3">A study on how online communication is influencing language development and usage.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">By Dr. Thomas Klein</span>
                  <Link to="/" className="text-xs flex items-center text-gray-800 hover:text-gray-600">Read More</Link>
                </div>
              </div>

              <div className="col-span-1">
                <h3 className="text-lg font-serif mb-2">Emerging Perspectives in Artificial Consciousness</h3>
                <p className="text-xs text-gray-500 mb-1">PHILOSOPHY • APR 17, 2023</p>
                <p className="text-sm text-gray-600 mb-3">Contemporary discussions around the philosophical implications of advanced AI.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">By Prof. Sophie Harris</span>
                  <Link to="/" className="text-xs flex items-center text-gray-800 hover:text-gray-600">Read More</Link>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link to="/" className="inline-flex items-center text-gray-800 hover:text-gray-600 text-sm group">
                <span className="mr-2">View all Humanities discipline articles</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom Ad Banner */}
        <div className="py-4 bg-gray-50 border-t border-gray-200">
          <div className="max-w-5xl mx-auto px-4">
            <AdPlaceholder format="banner" />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
