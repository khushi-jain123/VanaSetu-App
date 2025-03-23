import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-green-800">TreeAdopt</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-green-800 hover:text-green-600 transition-colors">Home</a>
            <a href="#" className="text-green-800 hover:text-green-600 transition-colors">About</a>
            <a href="#" className="text-green-800 hover:text-green-600 transition-colors">Trees</a>
            <a href="#" className="text-green-800 hover:text-green-600 transition-colors">Contribute</a>
            <a href="#" className="text-green-800 hover:text-green-600 transition-colors">Contact</a>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-colors btn-animate">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4 px-4 slide-in">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-green-800 hover:text-green-600 transition-colors">Home</a>
              <a href="#" className="text-green-800 hover:text-green-600 transition-colors">About</a>
              <a href="#" className="text-green-800 hover:text-green-600 transition-colors">Trees</a>
              <a href="#" className="text-green-800 hover:text-green-600 transition-colors">Contribute</a>
              <a href="#" className="text-green-800 hover:text-green-600 transition-colors">Contact</a>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-colors w-full">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;