import React from 'react';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-6 w-6 text-green-400" />
              <span className="text-xl font-bold">TreeAdopt</span>
            </div>
            <p className="text-green-200 mb-4">
              Our mission is to restore forests worldwide through tree adoption and community involvement.
              Join us in creating a greener, healthier planet for future generations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-green-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Our Trees</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Adopt a Tree</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Volunteer</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-green-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span className="text-green-200">123 Forest Avenue, Green City, Earth 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-green-200">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-green-200">info@treeadopt.org</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-green-700 pb-2">Newsletter</h3>
            <p className="text-green-200 mb-4">
              Subscribe to our newsletter to receive updates on our projects and impact.
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded bg-green-800 border border-green-700 text-white placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-medium transition-colors btn-animate"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-green-800 mt-12 pt-8 text-center text-green-400 text-sm">
          <p>&copy; {new Date().getFullYear()} TreeAdopt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;