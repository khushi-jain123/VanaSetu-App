import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tree, TreeLocation } from '../types';
import { trees, locations, getLocationsByTreeId } from '../data/trees';
import { useAuth } from '../context/AuthContext';
import { 
  TreePine, 
  MapPin, 
  Leaf, 
  DollarSign, 
  Info, 
  ShoppingCart, 
  Filter, 
  Search,
  ArrowUpDown,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const TreeCatalog: React.FC = () => {
  const { user } = useAuth();
  const [selectedTree, setSelectedTree] = useState<Tree | null>(null);
  const [selectedLocations, setSelectedLocations] = useState<TreeLocation[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('name-asc');
  const [showFilters, setShowFilters] = useState(false);
  const [cart, setCart] = useState<{tree: Tree, location: TreeLocation}[]>([]);
  
  // Filter and sort trees
  const filteredTrees = trees
    .filter(tree => {
      // Search filter
      const matchesSearch = 
        tree.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tree.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tree.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Category filter
      const matchesCategory = filterCategory ? tree.category === filterCategory : true;
      
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'points-asc':
          return a.pointsReward - b.pointsReward;
        case 'points-desc':
          return b.pointsReward - a.pointsReward;
        default:
          return 0;
      }
    });

  useEffect(() => {
    if (selectedTree) {
      setSelectedLocations(getLocationsByTreeId(selectedTree.id));
    }
  }, [selectedTree]);

  const handleTreeSelect = (tree: Tree) => {
    setSelectedTree(tree);
  };

  const handleAddToCart = (tree: Tree, location: TreeLocation) => {
    setCart([...cart, { tree, location }]);
  };

  const handleRemoveFromCart = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.tree.price, 0);
  };

  const calculateTotalPoints = () => {
    return cart.reduce((total, item) => total + item.tree.pointsReward, 0);
  };

  const categories = ['Fruit', 'Ornamental', 'Shade', 'Evergreen', 'Native'];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Main catalog section */}
        <div className="w-full md:w-2/3">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6 mb-8"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center mb-4 sm:mb-0">
                <TreePine className="h-6 w-6 text-green-600 mr-2" />
                Available Trees
              </h2>
              
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center bg-green-100 text-green-700 px-3 py-2 rounded-md hover:bg-green-200 transition-colors"
                >
                  <Filter className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">Filters</span>
                </button>
                
                <div className="relative">
                  <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search trees..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
            
            {/* Filters and sorting */}
            {showFilters && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-gray-50 p-4 rounded-md mb-6"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Filter by Category</h3>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setFilterCategory('')}
                        className={`px-3 py-1 text-xs rounded-full ${
                          filterCategory === '' 
                            ? 'bg-green-600 text-white' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        All
                      </button>
                      {categories.map(category => (
                        <button
                          key={category}
                          onClick={() => setFilterCategory(category)}
                          className={`px-3 py-1 text-xs rounded-full ${
                            filterCategory === category 
                              ? 'bg-green-600 text-white' 
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Sort by</h3>
                    <select
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}
                      className="w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="name-asc">Name (A-Z)</option>
                      <option value="name-desc">Name (Z-A)</option>
                      <option value="price-asc">Price (Low to High)</option>
                      <option value="price-desc">Price (High to Low)</option>
                      <option value="points-asc">Points (Low to High)</option>
                      <option value="points-desc">Points (High to Low)</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Tree grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTrees.length > 0 ? (
                filteredTrees.map(tree => (
                  <motion.div
                    key={tree.id}
                    whileHover={{ y: -5 }}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="relative h-48">
                      <img 
                        src={tree.image} 
                        alt={tree.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {tree.category}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-bold text-gray-800">{tree.name}</h3>
                      <p className="text-sm text-gray-500 italic mb-2">{tree.scientificName}</p>
                      
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center text-green-600 font-bold">
                          <DollarSign className="h-4 w-4 mr-1" />
                          ${tree.price.toFixed(2)}
                        </div>
                        <div className="flex items-center text-amber-600">
                          <Leaf className="h-4 w-4 mr-1" />
                          <span className="font-medium">+{tree.pointsReward} pts</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-gray-600 text-sm mb-4">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{getLocationsByTreeId(tree.id).length} planting locations</span>
                      </div>
                      
                      <button
                        onClick={() => handleTreeSelect(tree)}
                        className="w-full py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors"
                      >
                        View Details
                      </button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-gray-500">No trees match your search criteria. Try adjusting your filters.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
        
        {/* Sidebar - Tree details or cart */}
        <div className="w-full md:w-1/3 space-y-6 sticky top-20">
          {/* Selected tree details */}
          {selectedTree && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img 
                  src={selectedTree.image} 
                  alt={selectedTree.name} 
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => setSelectedTree(null)}
                  className="absolute top-2 right-2 bg-white/80 p-1 rounded-full hover:bg-white transition-colors"
                  aria-label="Close details"
                >
                  <X className="h-5 w-5 text-gray-700" />
                </button>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{selectedTree.name}</h3>
                <p className="text-sm text-gray-500 italic mb-3">{selectedTree.scientificName}</p>
                
                <p className="text-gray-600 mb-4">{selectedTree.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gray-50 p-2 rounded">
                    <span className="text-xs text-gray-500 block">Height</span>
                    <span className="font-medium">{selectedTree.height}</span>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <span className="text-xs text-gray-500 block">Growth Rate</span>
                    <span className="font-medium">{selectedTree.growthRate}</span>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <span className="text-xs text-gray-500 block">Care Level</span>
                    <span className="font-medium">{selectedTree.careLevel}</span>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <span className="text-xs text-gray-500 block">CO₂ Absorption</span>
                    <span className="font-medium">{selectedTree.co2Absorption}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">Benefits</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {selectedTree.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center mb-5">
                  <div className="flex items-center text-green-600 font-bold text-xl">
                    <DollarSign className="h-5 w-5 mr-1" />
                    ${selectedTree.price.toFixed(2)}
                  </div>
                  <div className="flex items-center text-amber-600">
                    <Leaf className="h-5 w-5 mr-1" />
                    <span className="font-medium">Earn {selectedTree.pointsReward} points</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-medium text-gray-800 mb-3">Available Planting Locations</h4>
                  
                  {selectedLocations.length > 0 ? (
                    <div className="space-y-3">
                      {selectedLocations.map(location => (
                        <div key={location.id} className="border border-gray-200 rounded-md p-3">
                          <div className="flex items-start">
                            <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0 mr-3">
                              <img 
                                src={location.image} 
                                alt={location.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h5 className="font-medium text-gray-800">{location.name}</h5>
                              <p className="text-sm text-gray-600 mb-2">{location.city}, {location.state}</p>
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-500">{location.availableSpots} spots available</span>
                                <button
                                  onClick={() => handleAddToCart(selectedTree, location)}
                                  className="text-green-600 hover:text-green-800 text-sm font-medium flex items-center"
                                >
                                  <ShoppingCart className="h-3 w-3 mr-1" />
                                  Add to Cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-sm">No planting locations available for this tree.</p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Shopping cart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-5"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <ShoppingCart className="h-5 w-5 text-green-600 mr-2" />
              Your Tree Cart
            </h3>
            
            {cart.length > 0 ? (
              <>
                <div className="space-y-3 mb-4 max-h-80 overflow-y-auto">
                  {cart.map((item, index) => (
                    <div key={index} className="flex items-center border-b border-gray-100 pb-3">
                      <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0 mr-3">
                        <img 
                          src={item.tree.image} 
                          alt={item.tree.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 text-sm">{item.tree.name}</h4>
                        <div className="flex justify-between items-center">
                          <p className="text-xs text-gray-500">{item.location.name}</p>
                          <span className="text-green-600 font-medium">${item.tree.price.toFixed(2)}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveFromCart(index)}
                        className="ml-2 text-gray-400 hover:text-red-500"
                        aria-label="Remove from cart"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 pt-3 mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${calculateTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-green-600">
                    <span>Points you'll earn</span>
                    <span className="font-medium">+{calculateTotalPoints()} pts</span>
                  </div>
                </div>
                
                <button className="w-full py-3 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors">
                  Proceed to Checkout
                </button>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="bg-gray-100 p-3 inline-flex rounded-full mb-3">
                  <TreePine className="h-6 w-6 text-gray-400" />
                </div>
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <p className="text-sm text-gray-400">Select a tree and planting location to get started</p>
              </div>
            )}
          </motion.div>
          
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-green-50 rounded-lg p-4 border border-green-100"
          >
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <Info className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">How it works</h4>
                <p className="text-sm text-gray-600">
                  Select trees you'd like to plant, choose a location, and complete your purchase. 
                  We'll plant the trees for you and you'll earn points that can be redeemed for rewards!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TreeCatalog;