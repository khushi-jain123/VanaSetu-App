import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Gift, ChevronRight, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reward } from '../types';

const RewardsCard: React.FC = () => {
  const { user } = useAuth();
  const [showRedeemModal, setShowRedeemModal] = useState(false);
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null);
  
  if (!user) return null;
  
  // Mock rewards data
  const rewards: Reward[] = [
    {
      id: '1',
      name: 'Tree Planting Kit',
      description: 'Get a kit with seeds, soil, and instructions to plant your own tree.',
      pointsCost: 200,
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: '2',
      name: 'Eco-Friendly T-Shirt',
      description: 'Organic cotton t-shirt with our TreeAdopt logo.',
      pointsCost: 350,
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: '3',
      name: 'Donation to Reforestation',
      description: 'We\'ll donate $10 to a reforestation project on your behalf.',
      pointsCost: 500,
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
    }
  ];

  const handleRedeemClick = (reward: Reward) => {
    setSelectedReward(reward);
    setShowRedeemModal(true);
  };

  const handleRedeem = () => {
    // In a real app, you would send a request to redeem the reward
    setShowRedeemModal(false);
    // You could also update the user's points here
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <Gift className="h-5 w-5 text-green-600 mr-2" />
        Available Rewards
      </h2>
      
      <div className="space-y-4">
        {rewards.map((reward) => (
          <div 
            key={reward.id} 
            className="border border-gray-200 rounded-lg overflow-hidden hover:border-green-300 transition-colors"
          >
            <div className="flex">
              <div className="w-20 h-20 flex-shrink-0">
                <img 
                  src={reward.image} 
                  alt={reward.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-gray-800">{reward.name}</h3>
                  <span className="text-green-600 font-bold">{reward.pointsCost} pts</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{reward.description}</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className={`text-sm ${user.points >= reward.pointsCost ? 'text-green-600' : 'text-orange-500'}`}>
                    {user.points >= reward.pointsCost ? 'Available to redeem' : `Need ${reward.pointsCost - user.points} more points`}
                  </span>
                  <button
                    onClick={() => handleRedeemClick(reward)}
                    disabled={user.points < reward.pointsCost}
                    className={`flex items-center text-sm font-medium rounded-md px-2 py-1 ${
                      user.points >= reward.pointsCost 
                        ? 'text-green-600 hover:bg-green-50' 
                        : 'text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Redeem <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="mt-4 w-full py-2 text-green-600 font-medium border border-green-600 rounded-md hover:bg-green-50 transition-colors">
        View All Rewards
      </button>
      
      {/* Redeem Modal */}
      {showRedeemModal && selectedReward && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
          >
            <div className="flex items-start mb-4">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <Gift className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Redeem Reward</h3>
                <p className="text-gray-600">Are you sure you want to redeem this reward?</p>
              </div>
            </div>
            
            <div className="flex items-center border border-gray-200 rounded-lg p-3 mb-4">
              <img 
                src={selectedReward.image} 
                alt={selectedReward.name} 
                className="w-16 h-16 object-cover rounded-md mr-3"
              />
              <div>
                <h4 className="font-medium text-gray-800">{selectedReward.name}</h4>
                <p className="text-sm text-gray-600">{selectedReward.description}</p>
                <div className="text-green-600 font-bold mt-1">{selectedReward.pointsCost} points</div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 mb-4 flex">
              <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
              <p className="text-sm text-yellow-700">
                This action cannot be undone. Your points will be deducted and the reward will be processed.
              </p>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={() => setShowRedeemModal(false)}
                className="flex-1 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleRedeem}
                className="flex-1 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors"
              >
                Confirm Redemption
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default RewardsCard;