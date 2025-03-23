import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Leaf, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const PointsCard: React.FC = () => {
  const { user } = useAuth();
  
  if (!user) return null;
  
  // Calculate progress to next level
  const currentPoints = user.points;
  const nextLevelPoints = 500; // Example threshold
  const progress = Math.min((currentPoints / nextLevelPoints) * 100, 100);
  
  // Mock point history
  const pointHistory = [
    { id: 1, action: 'Tree Adoption', points: 100, date: '2023-05-15' },
    { id: 2, action: 'Completed Survey', points: 50, date: '2023-05-10' },
    { id: 3, action: 'Referred a Friend', points: 75, date: '2023-05-05' },
    { id: 4, action: 'Tree Watering', points: 25, date: '2023-05-01' },
    { id: 5, action: 'Community Event', points: 100, date: '2023-04-25' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <Leaf className="h-5 w-5 text-green-600 mr-2" />
        Your Green Points
      </h2>
      
      {/* Points Summary */}
      <div className="bg-green-50 rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700 font-medium">Current Points</span>
          <span className="text-2xl font-bold text-green-600">{user.points}</span>
        </div>
        
        <div className="mb-2">
          <div className="flex justify-between text-sm mb-1">
            <span>Progress to next level</span>
            <span>{currentPoints}/{nextLevelPoints}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-green-600 h-2.5 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        <div className="text-sm text-gray-600">
          Earn {nextLevelPoints - currentPoints} more points to reach the next level!
        </div>
      </div>
      
      {/* Points History */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-800">Recent Activity</h3>
          <TrendingUp className="h-4 w-4 text-green-600" />
        </div>
        
        <div className="space-y-3">
          {pointHistory.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b border-gray-100 pb-2">
              <div>
                <div className="font-medium text-gray-800">{item.action}</div>
                <div className="text-sm text-gray-500">{item.date}</div>
              </div>
              <div className="text-green-600 font-semibold">+{item.points}</div>
            </div>
          ))}
        </div>
        
        <button className="mt-4 w-full py-2 text-green-600 font-medium border border-green-600 rounded-md hover:bg-green-50 transition-colors">
          View All Activity
        </button>
      </div>
    </motion.div>
  );
};

export default PointsCard;