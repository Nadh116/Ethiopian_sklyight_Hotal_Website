import React from 'react';
import { Crown, Star } from 'lucide-react';

const WelcomeSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Crown className="h-8 w-8 text-yellow-600" />
              <h2 className="text-3xl font-bold text-gray-800">Welcome to Ethiopian Skylight Hotel</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Nestled in the heart of Addis Ababa, Ethiopian Skylight Hotel offers an unparalleled 
              luxury experience that seamlessly blends modern comfort with authentic Ethiopian hospitality. 
              Our commitment to excellence ensures every guest enjoys a memorable stay.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-2xl font-bold text-yellow-600 mb-2">150+</div>
                <div className="text-sm text-gray-600">Luxury Rooms</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-2xl font-bold text-yellow-600 mb-2">5★</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-2xl font-bold text-yellow-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Service</div>
              </div>
            </div>
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-gray-600">Exceptional Guest Reviews</span>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Hotel Lobby"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-yellow-600 text-white p-4 rounded-lg shadow-lg">
              <div className="text-xl font-bold">Since 2020</div>
              <div className="text-sm">Serving Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;