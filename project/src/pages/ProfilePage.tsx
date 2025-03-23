import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import ProfileHeader from '../components/ProfileHeader';
import PointsCard from '../components/PointsCard';
import RewardsCard from '../components/RewardsCard';
import { motion } from 'framer-motion';
import { TreePine, MapPin, Calendar, Settings } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('trees');
  
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Please log in</h2>
          <p className="text-gray-600">You need to be logged in to view your profile.</p>
        </div>
      </div>
    );
  }

  // Mock adopted trees data
  const adoptedTrees = [
    {
      id: 1,
      name: 'Neem Tree #1234',
      location: 'Botany Garden',
      dateAdopted: '2023-01-15',
      image: 'https://thumbs.dreamstime.com/b/neem-plant-growing-soil-37613902.jpg',
      healthStatus: 'Excellent',
      co2Absorbed: '15kg',
      nextMaintenance: '2023-06-15'
    }
    // {
    //   id: 2,
    //   name: 'Pine Tree #5678',
    //   location: 'Yellowstone National Park',
    //   dateAdopted: '2023-02-20',
    //   image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/pine-tree-sapling-dale-powell.jpg',
    //   healthStatus: 'Good',
    //   co2Absorbed: '12kg',
    //   nextMaintenance: '2023-06-20'
    // },
    // {
    //   id: 3,
    //   name: 'Maple Tree #9012',
    //   location: 'Stanley Park, Vancouver',
    //   dateAdopted: '2023-03-10',
    //   image: 'https://thumbs.dreamstime.com/b/young-sapling-maple-tree-forest-park-grows-young-sapling-maple-tree-forest-park-grows-copy-space-238365469.jpg',
    //   healthStatus: 'Excellent',
    //   co2Absorbed: '10kg',
    //   nextMaintenance: '2023-06-25'
    // }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <div className="container mx-auto px-4 py-8">
        <ProfileHeader />
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <PointsCard />
            <RewardsCard />
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-lg mb-8">
              <div className="flex overflow-x-auto">
                <button
                  onClick={() => setActiveTab('trees')}
                  className={`flex items-center px-6 py-4 font-medium border-b-2 ${
                    activeTab === 'trees' 
                      ? 'border-green-600 text-green-600' 
                      : 'border-transparent text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <TreePine className="h-5 w-5 mr-2" />
                  My Trees
                </button>
                <button
                  onClick={() => setActiveTab('activities')}
                  className={`flex items-center px-6 py-4 font-medium border-b-2 ${
                    activeTab === 'activities' 
                      ? 'border-green-600 text-green-600' 
                      : 'border-transparent text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Activities
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`flex items-center px-6 py-4 font-medium border-b-2 ${
                    activeTab === 'settings' 
                      ? 'border-green-600 text-green-600' 
                      : 'border-transparent text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <Settings className="h-5 w-5 mr-2" />
                  Settings
                </button>
              </div>
            </div>
            
            {/* Tab Content */}
            {activeTab === 'trees' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-800">Your Adopted Trees</h2>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                    Adopt New Tree
                  </button>
                </div>
                
                <div className="space-y-6">
                  {adoptedTrees.map((tree) => (
                    <motion.div
                      key={tree.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img 
                            src={tree.image} 
                            alt={tree.name} 
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{tree.name}</h3>
                          
                          <div className="flex items-center text-gray-600 mb-4">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{tree.location}</span>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <div className="text-sm text-gray-500">Date Adopted</div>
                              <div className="font-medium">{tree.dateAdopted}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">Health Status</div>
                              <div className="font-medium text-green-600">{tree.healthStatus}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">CO2 Absorbed</div>
                              <div className="font-medium">{tree.co2Absorbed}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">Next Maintenance</div>
                              <div className="font-medium">{tree.nextMaintenance}</div>
                            </div>
                          </div>
                          
                          <div className="flex space-x-3">
                            <button className="flex-1 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors">
                              View Details
                            </button>
                            <button className="flex-1 py-2 border border-green-600 text-green-600 rounded-md font-medium hover:bg-green-50 transition-colors">
                              Track Growth
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {activeTab === 'activities' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h2 className="text-xl font-bold text-gray-800 mb-6">Upcoming Activities</h2>
                <p className="text-gray-600">
                  No upcoming activities scheduled. Check back later or join a community event.
                </p>
              </motion.div>
            )}
            
            {activeTab === 'settings' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h2 className="text-xl font-bold text-gray-800 mb-6">Account Settings</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      defaultValue={user.name}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      defaultValue={user.email}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Leave blank to keep current password"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="notifications" className="flex items-center">
                      <input
                        type="checkbox"
                        id="notifications"
                        defaultChecked
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-gray-700">Receive email notifications</span>
                    </label>
                  </div>
                  
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-3 px-4 rounded-md font-medium hover:bg-green-700 transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;