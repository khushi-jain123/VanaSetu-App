import React from 'react';
import { TreeDeciduous, Users, Globe, Award } from 'lucide-react';

const stats = [
  {
    id: 1,
    icon: TreeDeciduous,
    value: 25000,
    label: "Trees Planted",
    color: "text-green-600",
    progress: 83,
    progressColor: "bg-green-600"
  },
  {
    id: 2,
    icon: Users,
    value: 12500,
    label: "Active Adopters",
    color: "text-blue-600",
    progress: 62,
    progressColor: "bg-blue-600"
  },
  {
    id: 3,
    icon: Globe,
    value: 45,
    label: "Countries Reached",
    color: "text-purple-600",
    progress: 45,
    progressColor: "bg-purple-600"
  },
  {
    id: 4,
    icon: Award,
    value: 98,
    label: "Satisfaction Rate",
    suffix: "%",
    color: "text-yellow-600",
    progress: 98,
    progressColor: "bg-yellow-600"
  }
];

const Statistics = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how our community is making a difference around the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white rounded-xl p-6 shadow-md text-center card-hover">
              <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center ${stat.color.replace('text', 'bg').replace('600', '100')} mb-4`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                {stat.value.toLocaleString()}{stat.suffix || ''}
              </h3>
              
              <p className="text-gray-600 mb-4">{stat.label}</p>
              
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`${stat.progressColor} h-2.5 rounded-full`} 
                  style={{ width: `${stat.progress}%` }}
                ></div>
              </div>
              
              <p className="text-sm text-gray-500 mt-2">
                {stat.progress}% of our {new Date().getFullYear()} goal
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;