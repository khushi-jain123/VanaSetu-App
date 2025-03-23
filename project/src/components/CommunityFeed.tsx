import React, { useState } from 'react';
import { ArrowLeft, Calendar, Heart, MessageCircle, Share2, Users, Filter, MapPin, Leaf, TreePine } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Post {
  id: number;
  author: {
    name: string;
    avatar: string;
    location: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  tags: string[];
  isLiked: boolean;
}

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  attendees: number;
  image: string;
}

const CommunityFeed: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'posts' | 'events' | 'members'>('posts');
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: {
        name: 'Emma Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80',
        location: 'Portland, OR'
      },
      content: 'Just planted my 5th tree this month! It's amazing to see how much our community has grown. Who else is joining the weekend planting event?',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      likes: 48,
      comments: 13,
      shares: 5,
      timestamp: '2 hours ago',
      tags: ['TreePlanting', 'Community'],
      isLiked: false
    },
    {
      id: 2,
      author: {
        name: 'Michael Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80',
        location: 'Seattle, WA'
      },
      content: 'My adopted oak tree is showing new growth! It's been 3 months since I joined TreeAdopt and I'm so proud of the progress. Has anyone else adopted an oak?',
      image: 'https://images.unsplash.com/photo-1542320260-f8f651de8c12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      likes: 72,
      comments: 24,
      shares: 8,
      timestamp: '5 hours ago',
      tags: ['OakTree', 'Growth', 'Progress'],
      isLiked: true
    },
    {
      id: 3,
      author: {
        name: 'Sarah Williams',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80',
        location: 'Austin, TX'
      },
      content: 'Just reached Level 5 in the TreeAdopt program! Thanks to everyone who's been supporting my journey. Next goal: plant a community garden in my neighborhood.',
      likes: 103,
      comments: 31,
      shares: 12,
      timestamp: '1 day ago',
      tags: ['Milestone', 'CommunityGarden'],
      isLiked: false
    }
  ]);

  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: 'Weekend Tree Planting',
      date: 'Sat, Jun 15 • 9:00 AM',
      location: 'Green Park, Portland',
      attendees: 45,
      image: 'https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Urban Forest Workshop',
      date: 'Wed, Jun 19 • 6:30 PM',
      location: 'Community Center',
      attendees: 28,
      image: 'https://images.unsplash.com/photo-1588449668365-d15e397f6787?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Tree Care Basics',
      date: 'Sun, Jun 23 • 10:00 AM',
      location: 'Botanical Gardens',
      attendees: 36,
      image: 'https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const activeMembers = [
    {
      id: 1,
      name: 'David Miller',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80',
      trees: 12,
      level: 'Gold'
    },
    {
      id: 2,
      name: 'Jessica Lee',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80',
      trees: 9,
      level: 'Silver'
    },
    {
      id: 3,
      name: 'Robert Taylor',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80',
      trees: 15,
      level: 'Gold'
    },
    {
      id: 4,
      name: 'Amanda Garcia',
      avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80',
      trees: 7,
      level: 'Silver'
    },
    {
      id: 5,
      name: 'Thomas Wilson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80',
      trees: 5,
      level: 'Bronze'
    }
  ];

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked
        };
      }
      return post;
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Link to="/" className="mr-4">
            <ArrowLeft className="h-6 w-6 text-green-700" />
          </Link>
          <h1 className="text-2xl font-bold text-green-800">Community Feed</h1>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="flex border-b">
            <button
              className={`flex-1 py-3 text-center font-medium ${
                activeTab === 'posts' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('posts')}
            >
              Posts
            </button>
            <button
              className={`flex-1 py-3 text-center font-medium ${
                activeTab === 'events' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('events')}
            >
              Events
            </button>
            <button
              className={`flex-1 py-3 text-center font-medium ${
                activeTab === 'members' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('members')}
            >
              Members
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative">
            <button className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm text-gray-700">
              <Filter className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Filter</span>
            </button>
          </div>
          
          {activeTab === 'posts' && (
            <button className="bg-green-600 text-white px-4 py-2 rounded-full shadow-sm font-medium flex items-center">
              <span className="mr-1">New Post</span>
              <span className="text-lg">+</span>
            </button>
          )}
        </div>

        {/* Content based on active tab */}
        {activeTab === 'posts' && (
          <div className="space-y-6">
            {posts.map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Post Header */}
                <div className="p-4 flex items-start">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{post.author.name}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{post.author.location}</span>
                      <span className="mx-2">•</span>
                      <span>{post.timestamp}</span>
                    </div>
                  </div>
                </div>
                
                {/* Post Content */}
                <div className="px-4 pb-3">
                  <p className="text-gray-800 mb-3">{post.content}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map(tag => (
                      <span key={tag} className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Post Image (if any) */}
                {post.image && (
                  <div className="mb-3">
                    <img 
                      src={post.image} 
                      alt="Post" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                )}
                
                {/* Post Actions */}
                <div className="px-4 py-3 border-t border-gray-100 flex justify-between">
                  <button 
                    className={flex items-center ${post.isLiked ? 'text-red-500' : 'text-gray-600'}}
                    onClick={() => handleLike(post.id)}
                  >
                    <Heart className={h-5 w-5 mr-1 ${post.isLiked ? 'fill-current' : ''}} />
                    <span>{post.likes}</span>
                  </button>
                  
                  <button className="flex items-center text-gray-600">
                    <MessageCircle className="h-5 w-5 mr-1" />
                    <span>{post.comments}</span>
                  </button>
                  
                  <button className="flex items-center text-gray-600">
                    <Share2 className="h-5 w-5 mr-1" />
                    <span>{post.shares}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'events' && (
          <div className="space-y-6">
            {upcomingEvents.map(event => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="p-4 md:w-2/3 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">{event.title}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>
                  <div className="mt-4 flex space-x-3">
                    <button className="bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700 transition-colors flex-1">
                      Join Event
                    </button>
                    <button className="border border-green-600 text-green-600 px-4 py-2 rounded-md font-medium hover:bg-green-50 transition-colors">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="text-center mt-8">
              <button className="bg-white border border-green-600 text-green-600 px-6 py-2 rounded-full font-medium hover:bg-green-50 transition-colors inline-flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                View All Events
              </button>
            </div>
          </div>
        )}

        {activeTab === 'members' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeMembers.map(member => (
                <div key={member.id} className="bg-white rounded-lg shadow-md p-4 flex items-center">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-green-500"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{member.name}</h3>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <TreePine className="h-4 w-4 mr-1 text-green-600" />
                      <span>{member.trees} trees planted</span>
                    </div>
                    <div className="flex items-center">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        member.level === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
                        member.level === 'Silver' ? 'bg-gray-200 text-gray-700' :
                        'bg-amber-100 text-amber-800'
                      }`}>
                        {member.level} Member
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Community Leaderboard</h3>
              <div className="space-y-4">
                {activeMembers.slice(0, 3).map((member, index) => (
                  <div key={member.id} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                      index === 0 ? 'bg-yellow-400' :
                      index === 1 ? 'bg-gray-300' :
                      'bg-amber-600'
                    } text-white font-bold`}>
                      {index + 1}
                    </div>
                    <img 
                      src={member.avatar} 
                      alt={member.name} 
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">{member.name}</h4>
                      <div className="flex items-center text-sm text-gray-600">
                        <Leaf className="h-3 w-3 mr-1 text-green-600" />
                        <span>{member.trees} trees</span>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      index === 0 ? 'bg-yellow-100 text-yellow-800' :
                      index === 1 ? 'bg-gray-200 text-gray-700' :
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {member.level}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <button className="text-green-600 font-medium hover:underline">
                  View Full Leaderboard
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityFeed;