import React from 'react';
import { Bed, Users, Wifi, Car, Coffee, Bath, Star } from 'lucide-react';

const RoomsPage = () => {
  // Catalog of room types with price, image, amenities and size details
  const rooms = [
    {
      name: 'Standard Room',
      price: 'Starting from $120/night',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      amenities: ['Free WiFi', 'Air Conditioning', 'Minibar', 'Room Service', 'Flat-screen TV', 'Private Bathroom'],
      capacity: '2 Guests',
      size: '30 sqm'
    },
    {
      name: 'Deluxe Room',
      price: 'Starting from $180/night',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      amenities: ['Free WiFi', 'Air Conditioning', 'Minibar', 'Room Service', 'Flat-screen TV', 'Private Bathroom', 'City View', 'Work Desk'],
      capacity: '2-3 Guests',
      size: '40 sqm'
    },
    {
      name: 'Executive Suite',
      price: 'Starting from $280/night',
      image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800',
      amenities: ['Free WiFi', 'Air Conditioning', 'Minibar', 'Room Service', 'Flat-screen TV', 'Private Bathroom', 'Separate Living Area', 'Executive Lounge Access'],
      capacity: '4 Guests',
      size: '60 sqm'
    },
    {
      name: 'Presidential Suite',
      price: 'Starting from $450/night',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      amenities: ['Free WiFi', 'Air Conditioning', 'Minibar', 'Room Service', 'Flat-screen TV', 'Private Bathroom', 'Panoramic City View', 'Butler Service', 'Jacuzzi'],
      capacity: '6 Guests',
      size: '120 sqm'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Rooms & Suites</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our elegantly appointed accommodations designed for comfort and luxury
          </p>
        </div>
      </div>

      {/* Grid of room cards with booking buttons */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {rooms.map((room, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {room.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{room.name}</h3>
                  
                  <div className="flex items-center space-x-6 mb-4 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5" />
                      <span>{room.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Bed className="h-5 w-5" />
                      <span>{room.size}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Amenities:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {room.amenities.map((amenity, i) => (
                        <div key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <button className="bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700 transition-colors font-semibold">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features included in every room across the hotel */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">All Rooms Include</h2>
            <p className="text-lg text-gray-600">Premium amenities and services for your comfort</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <Wifi className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">High-Speed WiFi</h3>
              <p className="text-sm text-gray-600">Complimentary internet access</p>
            </div>
            <div className="text-center">
              <Car className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Airport Transfer</h3>
              <p className="text-sm text-gray-600">Complimentary shuttle service</p>
            </div>
            <div className="text-center">
              <Coffee className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Coffee & Tea</h3>
              <p className="text-sm text-gray-600">Premium Ethiopian coffee</p>
            </div>
            <div className="text-center">
              <Bath className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Luxury Toiletries</h3>
              <p className="text-sm text-gray-600">High-end bath amenities</p>
            </div>
            <div className="text-center">
              <Bed className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Premium Bedding</h3>
              <p className="text-sm text-gray-600">Egyptian cotton linens</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Concierge Service</h3>
              <p className="text-sm text-gray-600">24/7 guest assistance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomsPage;