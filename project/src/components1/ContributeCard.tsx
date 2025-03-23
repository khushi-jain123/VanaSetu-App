import React from 'react';
import { Users } from 'lucide-react';

const ContributeCard = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg card-hover">
      <div className="relative h-64">
        <img 
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
          alt="Volunteers planting trees" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-6">
            <h3 className="text-white text-2xl font-bold">Become a Contributor</h3>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Users className="h-6 w-6 text-blue-600 mr-2" />
          <span className="text-sm font-semibold text-blue-600">Join Our Community</span>
        </div>
        
        <p className="text-gray-700 mb-6">
          As a social worker or volunteer, you can make a significant difference. 
          Join our network of dedicated individuals who organize planting events, 
          educate communities, and help monitor the health of our forests.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
            <p className="text-sm text-gray-600">Participate in local planting events</p>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
            <p className="text-sm text-gray-600">Lead community education programs</p>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
            <p className="text-sm text-gray-600">Help with tree monitoring and maintenance</p>
          </div>
        </div>
        
        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors btn-animate">
          Contribute Now
        </button>
      </div>
    </div>
  );
};

export default ContributeCard;