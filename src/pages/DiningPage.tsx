import React from 'react';
import { Utensils, Clock, Star, Coffee } from 'lucide-react';

const DiningPage = () => {
  const restaurants = [
    {
      name: 'Addis Restaurant',
      cuisine: 'Authentic Ethiopian Cuisine',
      image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Experience the rich flavors of traditional Ethiopian cuisine in an elegant setting. Our skilled chefs prepare authentic dishes using time-honored recipes and the finest local ingredients.',
      hours: 'Open daily: 6:00 AM - 11:00 PM',
      specialties: ['Injera & Doro Wat', 'Kitfo', 'Vegetarian Combination', 'Traditional Coffee Ceremony']
    },
    {
      name: 'Skylight International',
      cuisine: 'International Fine Dining',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Savor international cuisine crafted with a modern twist. Our international menu features dishes from around the world, prepared with premium ingredients and artistic presentation.',
      hours: 'Open daily: 12:00 PM - 12:00 AM',
      specialties: ['Grilled Steaks', 'Fresh Seafood', 'Italian Pasta', 'Asian Fusion']
    },
    {
      name: 'Rooftop Lounge',
      cuisine: 'Cocktails & Light Bites',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Enjoy panoramic views of Addis Ababa while sipping expertly crafted cocktails. Our rooftop lounge offers a sophisticated atmosphere perfect for evening relaxation.',
      hours: 'Open daily: 5:00 PM - 2:00 AM',
      specialties: ['Signature Cocktails', 'Wine Selection', 'Artisanal Tapas', 'Sunset Views']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dining & Bars</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Embark on a culinary journey through authentic Ethiopian flavors and international cuisine
          </p>
        </div>
      </div>

      {/* Restaurants */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {restaurants.map((restaurant, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-96 object-cover rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex items-center space-x-2 mb-4">
                      <Utensils className="h-8 w-8 text-yellow-600" />
                      <h2 className="text-3xl font-bold text-gray-800">{restaurant.name}</h2>
                    </div>
                    
                    <p className="text-yellow-600 font-semibold mb-4">{restaurant.cuisine}</p>
                    
                    <p className="text-gray-600 mb-6">{restaurant.description}</p>
                    
                    <div className="flex items-center space-x-2 mb-6">
                      <Clock className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-600">{restaurant.hours}</span>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Specialties:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {restaurant.specialties.map((specialty, i) => (
                          <div key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                            <Star className="h-4 w-4 text-yellow-600 fill-current" />
                            <span>{specialty}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button className="bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition-colors font-semibold">
                      Make Reservation
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Special Dining Offers</h2>
            <p className="text-lg text-gray-600">Exclusive experiences for our guests</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-yellow-50 p-6 rounded-lg text-center">
              <Coffee className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Traditional Coffee Ceremony</h3>
              <p className="text-gray-600 mb-4">Experience the authentic Ethiopian coffee ritual with our expert hostesses.</p>
              <p className="text-yellow-600 font-bold">Daily at 3:00 PM</p>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg text-center">
              <Utensils className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Breakfast Buffet</h3>
              <p className="text-gray-600 mb-4">Start your day with our extensive breakfast featuring local and international dishes.</p>
              <p className="text-yellow-600 font-bold">6:00 AM - 10:00 AM</p>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg text-center">
              <Star className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Happy Hour</h3>
              <p className="text-gray-600 mb-4">Enjoy 25% off all drinks and appetizers at our Rooftop Lounge.</p>
              <p className="text-yellow-600 font-bold">5:00 PM - 7:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiningPage;