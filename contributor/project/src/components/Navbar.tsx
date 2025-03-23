import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Leaf } from "lucide-react";

const Navbar: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6" />
            <span className="text-xl font-bold">Vanasetu</span>
          </Link>

          <div className="flex items-center space-x-4">
            <a
              href="http://192.168.96.14:5500/index.html"
              className="hover:text-green-200 transition-colors"
            >
              Home
            </a>

            {currentUser ? (
              <>
                <Link
                  to="/profile"
                  className="hover:text-green-200 transition-colors"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-green-600 hover:bg-green-800 px-4 py-2 rounded-md transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hover:text-green-200 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-green-600 hover:bg-green-800 px-4 py-2 rounded-md transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
