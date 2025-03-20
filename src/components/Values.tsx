import React from 'react';
import { Star, Heart, Lightbulb } from 'lucide-react';

function Values() {
  const values = [
    {
      icon: Star,
      title: "EXCELLENCE",
      description: "Delivering high-quality care"
    },
    {
      icon: Heart,
      title: "COMPASSION",
      description: "Patient-first approach"
    },
    {
      icon: Lightbulb,
      title: "INNOVATION",
      description: "Using the latest technology"
    }
  ];

  return (
    <div className="bg-[#0c1152] py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-white text-center mb-16">
          OUR VALUES
        </h2>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center"
            >
              {/* Icon */}
              <value.icon className="w-12 h-12 text-white mb-6 stroke-[1.5]" />
              
              {/* Title */}
              <h3 className="text-white font-bold text-lg mb-2">
                {value.title}
              </h3>
              
              {/* Description */}
              <p className="text-white/80 text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Values;