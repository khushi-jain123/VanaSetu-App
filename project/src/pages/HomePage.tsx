import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import { motion } from "framer-motion";
import { Leaf, TreePine, Users, Heart } from "lucide-react";

const HomePage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <div className="container mx-auto px-4 py-12">
        {!isAuthenticated ? (
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
                Adopt a Tree, <br />
                Change the World
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Join our community of tree adopters and make a real impact on
                the environment. Every tree counts in the fight against climate
                change.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm flex">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <TreePine className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      10,000+ Trees
                    </h3>
                    <p className="text-sm text-gray-600">
                      Planted and cared for by our community
                    </p>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm flex">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      5,000+ Members
                    </h3>
                    <p className="text-sm text-gray-600">
                      Join our growing community of tree adopters
                    </p>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm flex">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Earn Points</h3>
                    <p className="text-sm text-gray-600">
                      Get rewards for your environmental actions
                    </p>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm flex">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Make an Impact
                    </h3>
                    <p className="text-sm text-gray-600">
                      Help fight climate change one tree at a time
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Auth Form */}
            <div className="flex-1 w-full max-w-md">
              <AuthForm isLogin={isLogin} onToggle={toggleAuthMode} />
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold text-green-800 mb-4">
              Welcome to TreeAdopt
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              You're now logged in. Visit your profile to see your adopted trees
              and rewards.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <div className="bg-green-100 p-3 rounded-full mb-4">
                  <TreePine className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Adopt a Tree
                </h2>
                <p className="text-gray-600 text-center mb-4">
                  Browse available trees and make a difference by adopting one
                  today.
                </p>
                <a
                  href="/Adopt"
                  className="mt-auto w-full py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors"
                >
                  Browse Trees
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <div className="bg-green-100 p-3 rounded-full mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Plant Disease Detection
                </h2>
                <p className="text-gray-600 text-center mb-4">
                  Monitor your tree's growth and the positive impact you're
                  making.
                </p>
                <a
                  href="/TrackProgress"
                  className="mt-auto w-full py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors"
                >
                  Detect Disease
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <div className="bg-green-100 p-3 rounded-full mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Join Community
                </h2>
                <p className="text-gray-600 text-center mb-4">
                  Connect with other tree adopters and participate in events.
                </p>
                <a
                  href="/Community"
                  className="mt-auto w-full py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors"
                >
                  Explore Community
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      {/* Video Tutorial Section */}
      <div className="mt-12 mb-12 text-center">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          How to Use TreeAdopt
        </h2>
        <div className="flex justify-center">
          <iframe
            width="660"
            height="315"
            src="https://www.youtube.com/embed/nOX3zt4TP58"
            title="TreeAdopt Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
