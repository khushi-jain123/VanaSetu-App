import React from 'react';
import { motion } from 'framer-motion';
import TreeCatalog from '../components/TreeCatalog';
import { TreePine, Leaf, MapPin } from 'lucide-react';

const TreesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <div className="container mx-auto px-4 py-8">
        {/* Hero section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-green-700 text-white rounded-lg overflow-hidden shadow-lg mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/40"></div>
            <div className="relative z-10 p-8 md:p-12 max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Plant a Tree, Make a Difference</h1>
              <p className="text-green-50 text-lg mb-6">
                Browse our selection of trees, choose where to plant them, and earn points while helping the environment.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center">
                  <div className="bg-white/20 p-2 rounded-full mr-3">
                    <TreePine className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">8+ Tree Species</h3>
                    <p className="text-sm text-green-100">For various environments</p>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center">
                  <div className="bg-white/20 p-2 rounded-full mr-3">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">5 Locations</h3>
                    <p className="text-sm text-green-100">Across the country</p>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center">
                  <div className="bg-white/20 p-2 rounded-full mr-3">
                    <Leaf className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Earn Points</h3>
                    <p className="text-sm text-green-100">Redeem for rewards</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute right-0 bottom-0 w-1/3 h-full hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Tree planting" 
                className="w-full h-full object-cover object-left"
              />
            </div>
          </div>
        </motion.div>
        
        {/* Tree catalog */}
        <TreeCatalog />
      </div>
    </div>
  );
};

export default TreesPage;