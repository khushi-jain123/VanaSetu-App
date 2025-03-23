import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import TreesPage from './pages/TreesPage';
import LeafBackground from './components/LeafBackground';
import PlantingChatbot from './components/PlantingChatbot';
import Adopt from './components/Adopt';


function Userhomepage(){
    return (
        <AuthProvider>
            <Router>
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 relative">
          <LeafBackground />
          <Navbar />
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/trees" element={<TreesPage />} /> 
               <Route path="/adopt" element={<Adopt />} />             
              
              
            </Routes>
          </div>
          <PlantingChatbot />
        </div>
      </Router>
        </AuthProvider>
    );
}
export default Userhomepage;