import React, { useState } from 'react';
import { Users, Calendar, MessageSquare, Award, ArrowLeft, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for community page
const upcomingEvents = [
  {
    id: 1,
    title: "Earth Day Tree Planting",
    date: "April 22, 2025",
    location: "Central Park",
    attendees: 156,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    title: "Urban Forest Workshop",
    date: "May 15, 2025",
    location: "Community Center",
    attendees: 89,
    image: "https://th.bing.com/th?id=OIP.TF6TeWcXd2-P7ZDcNdDpEAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
  },
  {
    id: 3,
    title: "Tree Care Basics",
    date: "June 5, 2025",
    location: "Botanical Gardens",
    attendees: 42,
    image: "https://images.unsplash.com/photo-1503785640985-f62e3aeee448?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

const forumTopics = [
  {
    id: 1,
    title: "Best practices for watering young trees",
    author: "GreenThumb",
    replies: 24,
    lastActive: "2 hours ago"
  },
  {
    id: 2,
    title: "How to identify common tree diseases",
    author: "TreeDoctor",
    replies: 18,
    lastActive: "1 day ago"
  },
  {
    id: 3,
    title: "Share your tree adoption story!",
    author: "ForestFriend",
    replies: 56,
    lastActive: "3 hours ago"
  },
  {
    id: 4,
    title: "Native species recommendations for urban areas",
    author: "CityPlanter",
    replies: 32,
    lastActive: "5 hours ago"
  }
];

const featuredMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    treesAdopted: 12,
    joinDate: "Jan 2024",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    name: "Michael Chen",
    treesAdopted: 8,
    joinDate: "Mar 2024",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    name: "Aisha Patel",
    treesAdopted: 15,
    joinDate: "Nov 2023",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 4,
    name: "David Wilson",
    treesAdopted: 7,
    joinDate: "Feb 2024",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'events' | 'forum' | 'members'>('events');

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header with back button */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-green-700 hover:text-green-800 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span className="font-medium">Back to Home</span>
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mt-4">TreeAdopt Community</h1>
          <p className="text-lg text-gray-700 mt-2">
            Connect with fellow tree adopters, join events, and share your experiences
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <p className="text-gray-600">Active Members</p>
              <h3 className="text-2xl font-bold text-gray-800">5,243</h3>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <Calendar className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <p className="text-gray-600">Upcoming Events</p>
              <h3 className="text-2xl font-bold text-gray-800">12</h3>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <MessageSquare className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <p className="text-gray-600">Forum Topics</p>
              <h3 className="text-2xl font-bold text-gray-800">328</h3>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('events')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'events'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Calendar className="inline-block h-5 w-5 mr-2" />
              Events
            </button>
            
            <button
              onClick={() => setActiveTab('forum')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'forum'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <MessageSquare className="inline-block h-5 w-5 mr-2" />
              Forum
            </button>
            
            <button
              onClick={() => setActiveTab('members')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'members'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Users className="inline-block h-5 w-5 mr-2" />
              Members
            </button>
          </nav>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
              
            />
          </div>
          
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            <Filter className="h-5 w-5 mr-2" />
            Filter
          </button>
          
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            {activeTab === 'events' && 'Create Event'}
            {activeTab === 'forum' && 'New Topic'}
            {activeTab === 'members' && 'Invite Member'}
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {activeTab === 'events' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Upcoming Events</h2>
                <div className="text-sm text-gray-500">Showing 3 of 12 events</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {upcomingEvents.map(event => (
                  <div key={event.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg text-gray-800 mb-2">{event.title}</h3>
                      <div className="flex items-center text-gray-600 text-sm mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm mb-3">
                        <Users className="h-4 w-4 mr-1" />
                        {event.attendees} attending
                      </div>
                      <button className="w-full py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors">
                        Join Event
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  View All Events
                </button>
              </div>
            </div>
          )}
          
          {activeTab === 'forum' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Popular Discussions</h2>
                <div className="text-sm text-gray-500">Showing 4 of 328 topics</div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {forumTopics.map(topic => (
                  <div key={topic.id} className="py-4 flex items-center justify-between hover:bg-gray-50 px-3 rounded-md cursor-pointer">
                    <div>
                      <h3 className="font-medium text-gray-900">{topic.title}</h3>
                      <div className="mt-1 text-sm text-gray-500">
                        Started by {topic.author} • {topic.replies} replies • Last active {topic.lastActive}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <button className="text-green-600 hover:text-green-800 font-medium text-sm">
                        View Thread
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  Browse All Topics
                </button>
              </div>
            </div>
          )}
          
          {activeTab === 'members' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Featured Members</h2>
                <div className="text-sm text-gray-500">Showing 4 of 5,243 members</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredMembers.map(member => (
                  <div key={member.id} className="border border-gray-200 rounded-lg p-4 flex flex-col items-center hover:shadow-md transition-shadow">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
                      <img 
                        src={member.avatar} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-800">{member.name}</h3>
                    <div className="text-sm text-gray-500 mb-3">Member since {member.joinDate}</div>
                    <div className="flex items-center text-green-600 mb-4">
                      <Award className="h-4 w-4 mr-1" />
                      <span>{member.treesAdopted} trees adopted</span>
                    </div>
                    <button className="w-full py-2 border border-green-600 text-green-600 rounded-md font-medium hover:bg-green-50 transition-colors">
                      View Profile
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  View All Members
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Community Guidelines */}
        <div className="mt-10 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Community Guidelines</h2>
          <div className="prose max-w-none text-gray-600">
            <p>
              Our community thrives on respect, collaboration, and a shared passion for environmental conservation. 
              Please follow these guidelines to ensure a positive experience for everyone:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Be respectful and kind to fellow members</li>
              <li>Share your knowledge and experiences freely</li>
              <li>Keep discussions relevant to tree adoption and environmental topics</li>
              <li>Respect privacy and personal boundaries</li>
              <li>Report any concerns to community moderators</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;