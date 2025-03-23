import React from 'react';
import { Star, UserCircle } from 'lucide-react';

const feedbackData = [
  {
    id: 1,
    name: "khushi jain",
    role: "Tree Adopter",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "Adopting a tree through TreeAdopt was such a rewarding experience. I receive regular updates about my tree's growth and the impact it's making!"
  },
  {
    id: 2,
    name: "sakshi arora",
    role: "Environmental Volunteer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 4,
    comment: "As a volunteer, I've seen firsthand how TreeAdopt is changing communities. Their organization and commitment to sustainability is impressive."
  },
  {
    id: 3,
    name: "miya rahani",
    role: "School Teacher",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "My class adopted 10 trees last year, and it's been an amazing educational journey. The kids love getting updates and learning about environmental impact."
  },
  {
    id: 4,
    name: "kashish samganir",
    role: "Corporate Partner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "Our company partnered with TreeAdopt for our sustainability initiative. The process was seamless, and the impact reports are excellent for our stakeholders."
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
        />
      ))}
    </div>
  );
};

const Feedback = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            What Our Community Says
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from tree adopters, volunteers, and partners about their experiences with TreeAdopt.
          </p>
        </div>
        
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 space-x-6 scrollbar-hide">
          {feedbackData.map((feedback) => (
            <div 
              key={feedback.id} 
              className="bg-green-50 rounded-xl p-6 shadow-md min-w-[300px] md:min-w-[350px] card-hover"
            >
              <div className="flex items-center mb-4">
                {feedback.image ? (
                  <img 
                    src={feedback.image} 
                    alt={feedback.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                ) : (
                  <UserCircle className="w-12 h-12 text-green-700 mr-4" />
                )}
                <div>
                  <h4 className="font-semibold text-gray-800">{feedback.name}</h4>
                  <p className="text-sm text-gray-600">{feedback.role}</p>
                </div>
              </div>
              
              <StarRating rating={feedback.rating} />
              
              <p className="mt-4 text-gray-700">
                "{feedback.comment}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-6">
          <div className="flex space-x-2">
            {[...Array(4)].map((_, i) => (
              <button 
                key={i} 
                className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-green-600' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;