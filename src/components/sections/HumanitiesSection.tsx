
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HumanitiesSection = () => {
  return (
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
  );
};

export default HumanitiesSection;
