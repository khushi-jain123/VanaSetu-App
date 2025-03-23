import React from "react";
import { TreeDeciduous } from "lucide-react";

const AdoptCard = () => {

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg card-hover">
      <div className="relative h-64">
        <img
          src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="Tree planting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-6">
            <h3 className="text-white text-2xl font-bold">Adopt a Tree</h3>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center mb-4">
          <TreeDeciduous className="h-6 w-6 text-green-600 mr-2" />
          <span className="text-sm font-semibold text-green-600">
            Plant for the Future
          </span>
        </div>

        <p className="text-gray-700 mb-6">
          By adopting a tree, you're making a direct impact on our environment.
          Your tree will be planted in areas that need reforestation the most,
          helping to restore ecosystems and combat climate change.
        </p>

        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
            <p className="text-sm text-gray-600">
              Receive updates about your tree's growth
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
            <p className="text-sm text-gray-600">
              Get a personalized adoption certificate
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
            <p className="text-sm text-gray-600">
              Track your environmental impact
            </p>
          </div>
        </div>

        <a
          href="./Userhomepage"
          className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors btn-animate text-center block"
        >
          Adopt Now
        </a>
      </div>
    </div>
  );
};

export default AdoptCard;
