
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  readTime: string;
}

export const categories = [
  { 
    id: 'science',
    name: 'Science', 
    description: 'Explore scientific discoveries and research',
    articleCount: 142
  },
  { 
    id: 'technology',
    name: 'Technology', 
    description: 'Insights on emerging technologies',
    articleCount: 89
  },
  { 
    id: 'medicine',
    name: 'Medicine', 
    description: 'Updates on medical breakthroughs',
    articleCount: 104
  },
  { 
    id: 'humanities',
    name: 'Humanities', 
    description: 'Exploring human culture and history',
    articleCount: 76
  }
];

export const articles: Article[] = [
  {
    id: '1',
    title: 'Advances in Quantum Computing Acceleration',
    excerpt: 'New research unlocks quantum advantages for cryptography and scientific simulations.',
    category: 'Science',
    author: 'Dr. Emily Parker',
    date: 'May 12, 2023',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
    readTime: '8 min read'
  },
  {
    id: '2',
    title: 'Climate Change Impact on Marine Ecosystems',
    excerpt: 'New findings suggest the relationship between ocean acidification and coral health.',
    category: 'Science',
    author: 'Dr. Michael Richardson',
    date: 'Jun 03, 2023',
    image: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=800&q=80',
    readTime: '10 min read'
  },
  {
    id: '3',
    title: 'Neural Networks in Predictive Medicine',
    excerpt: 'Machine learning algorithms predict disease progression with increased accuracy.',
    category: 'Medicine',
    author: 'Dr. Sarah Johnson',
    date: 'Apr 30, 2023',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    readTime: '7 min read'
  },
  {
    id: '4',
    title: 'Ecosystems: Understanding Biodiversity',
    excerpt: 'New research models the relationship between ecosystem diversity and climate resilience.',
    category: 'Science',
    author: 'Prof. Richard Hamilton',
    date: 'May 18, 2023',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80',
    readTime: '9 min read'
  },
  {
    id: '5',
    title: 'CERN: Latest Particle Discoveries',
    excerpt: 'Scientists at CERN have discovered a new way of understanding particle interactions.',
    category: 'Science',
    author: 'Dr. Lisa Wang',
    date: 'Jun 15, 2023',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80',
    readTime: '12 min read'
  },
  {
    id: '6',
    title: 'Endurance: Sleep and Athletic Performance',
    excerpt: 'A comprehensive study evaluates the relationship between sleep quality and athletic recovery.',
    category: 'Medicine',
    author: 'Dr. Carlos Martinez',
    date: 'May 28, 2023',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80',
    readTime: '6 min read'
  },
  {
    id: '7',
    title: 'Microstructures of CRISPR Gene Therapy',
    excerpt: 'A detailed examination of genetic treatments at microscopic levels.',
    category: 'Medicine',
    author: 'Dr. Robert Chen',
    date: 'Apr 10, 2023',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=800&q=80',
    readTime: '11 min read'
  },
  {
    id: '8',
    title: 'Microbiome Research and Digestive Disorders',
    excerpt: 'Latest research connecting gut bacteria to various digestive conditions.',
    category: 'Medicine',
    author: 'Dr. Maria Lopez',
    date: 'May 5, 2023',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
    readTime: '8 min read'
  },
  {
    id: '9',
    title: 'Digital Humanities: Preserving Cultural Heritage',
    excerpt: 'How digital technologies are transforming the preservation and study of historical artifacts.',
    category: 'Humanities',
    author: 'Prof. Eleanor Davidson',
    date: 'Jun 8, 2023',
    image: 'https://images.unsplash.com/photo-1569511166283-610cfdd40e76?auto=format&fit=crop&w=800&q=80',
    readTime: '8 min read'
  },
  {
    id: '10',
    title: 'The Evolution of Linguistic Structures in Social Media',
    excerpt: 'A study on how online communication is influencing language development and usage.',
    category: 'Humanities',
    author: 'Dr. Thomas Klein',
    date: 'May 22, 2023',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80',
    readTime: '9 min read'
  },
  {
    id: '11',
    title: 'Emerging Perspectives in Artificial Consciousness',
    excerpt: 'Contemporary discussions around the philosophical implications of advanced AI.',
    category: 'Humanities',
    author: 'Prof. Sophie Harris',
    date: 'Apr 17, 2023',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    readTime: '10 min read'
  },
  {
    id: '12',
    title: 'Neural Networks in Predictive Models',
    excerpt: 'Machine learning algorithms are transforming scientific forecasting.',
    category: 'Technology',
    author: 'Dr. Sarah Johnson',
    date: 'Apr 30, 2023',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
    readTime: '7 min read'
  },
  {
    id: '13',
    title: 'Advancements of CRISPR Gene Therapy',
    excerpt: 'A detailed examination of recent developments in genetic treatments.',
    category: 'Technology',
    author: 'Dr. Robert Chen',
    date: 'Apr 10, 2023',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    readTime: '11 min read'
  },
  {
    id: '14',
    title: 'Quantum Computing Applications',
    excerpt: 'Exploring the practical implications of quantum computing for industry.',
    category: 'Technology',
    author: 'Dr. Emily Parker',
    date: 'May 12, 2023',
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=800&q=80',
    readTime: '8 min read'
  }
];

export const getTechnologyArticles = () => {
  return articles.filter(article => article.category === 'Technology');
};

export const getScienceArticles = () => {
  return articles.filter(article => article.category === 'Science');
};

export const getMedicineArticles = () => {
  return articles.filter(article => article.category === 'Medicine');
};

export const getHumanitiesArticles = () => {
  return articles.filter(article => article.category === 'Humanities');
};

export const getLatestArticles = () => {
  return articles.slice(0, 6);
};
