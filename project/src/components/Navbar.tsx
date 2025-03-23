import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Leaf, LogOut, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="bg-green-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
            <Leaf className="h-6 w-6" />
            <span>Vanasetu</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <div className="flex items-center space-x-2">
                  <span className="hidden md:inline">Points: {user?.points}</span>
                  <Link to="/profile" className="flex items-center space-x-1 hover:text-green-200">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img 
                        src={user?.profilePicture} 
                        alt={user?.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="hidden md:inline">{user?.name}</span>
                  </Link>
                  <button 
                    onClick={logout}
                    className="p-2 hover:bg-green-700 rounded-full"
                    aria-label="Logout"
                  >
                    <LogOut className="h-5 w-5" />
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Link 
                  to="/" 
                  className="py-2 px-4 hover:bg-green-700 rounded-md transition-colors"
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="py-2 px-4 hover:bg-green-700 rounded-md transition-colors"
                >
                  Chatbot 
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;