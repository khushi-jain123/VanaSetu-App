import React from "react";
import { Link } from "react-router-dom";
import { Leaf, Heart, Users, Calendar } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative bg-green-700 text-white rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/50 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt="Trees in a forest"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 py-16 px-8 md:px-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            "Be a Contributor – Plant, Nurture, and Grow a Greener Future!" 🌱
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Join our community of contributor and make a lasting impact on the
            environment. Every tree counts.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/signup"
              className="bg-white text-green-700 hover:bg-green-100 px-6 py-3 rounded-md font-semibold transition-colors"
            >
              Start Contributing
            </Link>
            <Link
              to="/login"
              className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-md font-semibold transition-colors"
            >
              Login to Your Account
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-green-800">
              Plant & Register
            </h3>
            <p className="text-gray-600">
              Plant trees in your area and register them on our platform with
              photos and details.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-green-800">
              Care & Nurture
            </h3>
            <p className="text-gray-600">
              Commit to caring for your trees and provide regular updates on
              their growth.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-green-800">
              Connect & Share
            </h3>
            <p className="text-gray-600">
              Connect with contributors who support your environmental efforts
              and share your journey.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-50 rounded-xl p-8 text-center"></div>
      {/* Video Tutorial Section */}
      <div className="mt-9 mb-12 text-center">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          How to Contribute
        </h2>
        <div className="flex justify-center">
          <iframe
            width="660"
            height="315"
            src="https://www.youtube.com/embed/1m6yW8xBm-g"
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

export default Home;
