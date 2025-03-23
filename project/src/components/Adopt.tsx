import React, { useState } from "react";
import {
  Leaf,
  Heart,
  MapPin,
  Gift,
  Info,
  ArrowRight,
  Github,
  Twitter,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";

// Plant data
const plants = [
  {
    id: 1,
    name: "Neem Tree",
    image:
      "https://thumbs.dreamstime.com/b/neem-plant-growing-soil-37613902.jpg",
    cost: "Rs.300 + platform free: Rs.20",
    rewards: "Oxygen production, Air purification, Stress reduction",
    location: "Botanical Garden, Central Park",
    description:
      "The Monstera Deliciosa, also known as the Swiss Cheese Plant, is famous for its unique leaf holes. It's a tropical plant native to the rainforests of Southern Mexico and Panama. When you adopt this plant, you're bringing home a piece of the rainforest that will thrive in your space with minimal care. It prefers bright, indirect light and moderate watering.",
  },
  {
    id: 2,
    name: "Banyan Tree",
    image:
      "https://www.shutterstock.com/image-photo/sapling-banyan-tree-260nw-2052723239.jpg",
    cost: "Rs.436.58 + platform free: Rs.20",
    rewards: "Improves air quality, Natural decor, Mood booster",
    location: "Green Thumb Nursery, Downtown",
    description:
      "The Fiddle Leaf Fig is an elegant indoor tree with large, violin-shaped leaves that can grow up to 10 feet tall. Native to western Africa, this statement plant has become incredibly popular for its dramatic appearance. It requires consistent care with bright, filtered light and regular watering when the top inch of soil is dry. Your adoption helps preserve this beautiful species.",
  },
  {
    id: 3,
    name: "Mango Tree",
    image:
      "https://www.garden.eco/wp-content/uploads/2018/07/mango-seedling.jpg",
    cost: "Rs.500 + platform free: Rs.20",
    rewards: "Night oxygen production, Low maintenance, Removes toxins",
    location: "Urban Jungle Shop, Westside",
    description:
      "The Snake Plant, or Sansevieria, is one of the most tolerant houseplants you can find. It thrives in almost any condition and requires minimal attention. NASA research has shown it's one of the best plants for improving indoor air quality by removing toxins. Its striking upright leaves with yellow borders make it both decorative and practical. Perfect for beginners or busy plant parents.",
  },
  {
    id: 4,
    name: "Lily tree",
    image:
      "https://th.bing.com/th/id/OIP.7aur8g2f4jAcakRpGd0__QHaHa?w=184&h=185&c=7&r=0&o=5&pid=1.7",
    cost: "Rs.250 + platform free: Rs.20",
    rewards: "Toxin removal, Humidity increase, Beautiful blooms",
    location: "Flower Power Nursery, Eastside",
    description:
      "The Peace Lily is a popular flowering houseplant with glossy green leaves and pristine white blooms. It's exceptionally good at cleaning the air of pollutants and toxins. Peace Lilies prefer low to medium light and consistent moisture. When they need water, they'll dramatically droop to let you know! By adopting this plant, you're bringing home a natural air purifier that will also add elegance to your space.",
  },
];

function Adopt() {
  const [selectedPlant, setSelectedPlant] = useState<number | null>(null);

  const toggleDescription = (id: number) => {
    setSelectedPlant(selectedPlant === id ? null : id);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-green-50 to-green-100 overflow-hidden">
      {/* Animated leaves background
      <div className="leaf-container absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="leaf absolute"
            style={{
              left: ${Math.random() * 100}%,
              top: ${Math.random() * 100}%,
              animationDelay: ${Math.random() * 10}s,
              animationDuration: ${15 + Math.random() * 15}s,
              transform: rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 0.5}),
            }}
          >
            <Leaf 
              size={30 + Math.random() * 20} 
              className="text-green-500 opacity-30" 
              style={{ filter: 'blur(0.5px)' }}
            />
          </div>
        ))}
      </div> */}

      {/* Header */}
      <header className="relative pt-16 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 animate-fadeIn">
          Adopt a Plant
        </h1>
        <p className="text-lg text-green-700 max-w-2xl mx-auto px-4 animate-fadeIn animation-delay-200">
          Bring nature into your home and make a difference. Each adoption helps
          support conservation efforts.
        </p>
      </header>

      {/* Plant Cards */}
      <main className="relative max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plants.map((plant) => (
            <div
              key={plant.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-bold text-green-800 mb-2">
                  {plant.name}
                </h2>

                <div className="flex items-center text-gray-700 mb-2">
                  <MapPin size={16} className="mr-1 text-green-600" />
                  <span className="text-sm">{plant.location}</span>
                </div>

                <div className="flex items-center text-gray-700 mb-2">
                  <Gift size={16} className="mr-1 text-green-600" />
                  <span className="text-sm truncate" title={plant.rewards}>
                    {plant.rewards.length > 30
                      ? plant.rewards.substring(0, 30) + "..."
                      : plant.rewards}
                  </span>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold text-green-700">
                    {plant.cost}
                  </span>
                  <button
                    onClick={() => toggleDescription(plant.id)}
                    className="flex items-center bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-full transition-colors duration-300"
                  >
                    <Info size={16} className="mr-1" />
                    <span>Details</span>
                  </button>
                </div>

                {selectedPlant === plant.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200 animate-fadeIn">
                    <p className="text-gray-700 text-sm">{plant.description}</p>
                    <a
                      href="/adoptnow"
                      className="mt-4 flex items-center text-green-600 hover:text-green-800 font-medium transition-colors duration-300"
                    >
                      <span>Adopt Now</span>
                      <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
    </div>
  );
}

export default Adopt;
