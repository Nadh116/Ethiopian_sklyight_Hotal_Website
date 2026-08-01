import React from 'react';
import { Utensils, Users, Wifi, Car, Dumbbell, Coffee } from 'lucide-react';

const FeaturesSection = () => {
  // Six amenity highlights each with an icon, title and description
  const features = [
    {
      icon: Utensils,
      title: 'Fine Dining',
      description: 'Experience authentic Ethiopian cuisine and international dishes crafted by our world-class chefs.'
    },
    {
      icon: Users,
      title: 'Conference Halls',
      description: 'State-of-the-art meeting facilities perfect for business conferences and special events.'
    },
    {
      icon: Wifi,
      title: 'High-Speed WiFi',
      description: 'Stay connected with complimentary high-speed internet throughout the hotel.'
    },
    {
      icon: Car,
      title: 'Airport Shuttle',
      description: 'Convenient transportation service to and from Bole International Airport.'
    },
    {
      icon: Dumbbell,
      title: 'Fitness Center',
      description: 'Modern gym facilities and wellness center for your health and relaxation needs.'
    },
    {
      icon: Coffee,
      title: 'Coffee Culture',
      description: 'Enjoy traditional Ethiopian coffee ceremonies and premium coffee experiences.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Premium Amenities & Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the exceptional features that make Ethiopian Skylight Hotel your perfect choice for business and leisure.
          </p>
        </div>
        
        {/* Responsive grid rendering each amenity feature card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-transform duration-300">
              <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-100 transition-colors">
                <feature.icon className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;