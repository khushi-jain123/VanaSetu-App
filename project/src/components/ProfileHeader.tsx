import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Camera, Award, TreePine } from 'lucide-react';
import { motion } from 'framer-motion';

const ProfileHeader: React.FC = () => {
  const { user, updateUser } = useAuth();
  const [isUploading, setIsUploading] = useState(false);

  const handleProfilePictureChange = () => {
    // Simulate profile picture update
    setIsUploading(true);
    setTimeout(() => {
      // In a real app, you would upload the image to a server
      // and get back a URL to the uploaded image
      updateUser({
        profilePicture: `https://images.unsplash.com/photo-${Math.random() > 0.5 ? '1535713875002-d1d0cf377fde' : '1599566150163-29194dcaad36'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80`
      });
      setIsUploading(false);
    }, 1500);
  };

  if (!user) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      {/* Cover Photo */}
      <div className="h-48 bg-gradient-to-r from-green-400 to-green-600 relative">
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      
      {/* Profile Info */}
      <div className="relative px-6 pb-6">
        {/* Profile Picture */}
        <div className="absolute -top-16 left-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white">
              <img 
                src={user.profilePicture} 
                alt={user.name} 
                className="w-full h-full object-cover"
              />
              {isUploading && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
            <button 
              onClick={handleProfilePictureChange}
              className="absolute bottom-0 right-0 bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
              aria-label="Change profile picture"
            >
              <Camera className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        {/* User Info */}
        <div className="pt-20">
          <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
          
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="flex items-center bg-green-50 px-4 py-2 rounded-full">
              <Award className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-green-800 font-medium">{user.level}</span>
            </div>
            
            <div className="flex items-center bg-green-50 px-4 py-2 rounded-full">
              <TreePine className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-green-800 font-medium">{user.treesAdopted} Trees Adopted</span>
            </div>
            
            <div className="flex items-center bg-green-50 px-4 py-2 rounded-full">
              <span className="text-green-800 font-medium">Joined: {user.joinDate}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileHeader;