import React from 'react';
import { Users, Presentation, Heart, Calendar, MapPin, Phone } from 'lucide-react';

const EventsPage = () => {
  // Event venue options with capacity and available features
  const venues = [
    {
      name: 'Grand Ballroom',
      capacity: 'Up to 300 guests',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Professional lighting', 'Audio/Visual equipment', 'Dance floor', 'Catering kitchen access'],
      ideal: 'Weddings, Galas, Large conferences'
    },
    {
      name: 'Executive Conference Room',
      capacity: 'Up to 50 guests',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['High-speed WiFi', 'Projector & screen', 'Video conferencing', 'Whiteboard'],
      ideal: 'Business meetings, Presentations, Board meetings'
    },
    {
      name: 'Rooftop Terrace',
      capacity: 'Up to 150 guests',
      image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Panoramic city views', 'Outdoor bar', 'Weather protection', 'Ambient lighting'],
      ideal: 'Cocktail parties, Networking events, Intimate weddings'
    }
  ];

  // Predefined event packages with pricing and inclusions
  const packages = [
    {
      name: 'Wedding Package',
      icon: Heart,
      price: 'Starting from $5,000',
      includes: ['Venue decoration', 'Bridal suite', 'Wedding cake', 'Photography services', 'Complimentary honeymoon night']
    },
    {
      name: 'Corporate Package',
      icon: Presentation,
      price: 'Starting from $2,500',
      includes: ['Meeting room setup', 'A/V equipment', 'Coffee breaks', 'Lunch service', 'Business center access']
    },
    {
      name: 'Social Events',
      icon: Users,
      price: 'Starting from $1,500',
      includes: ['Venue setup', 'Catering service', 'Entertainment system', 'Photography', 'Event coordination']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meetings & Events</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Create unforgettable moments with our world-class event facilities and professional service
          </p>
        </div>
      </div>

      {/* Venue cards rendered from the venues data */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Event Venues</h2>
            <p className="text-lg text-gray-600">Flexible spaces designed for every occasion</p>
          </div>
          
          {/* Three-column grid of venue cards with capacity info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {venues.map((venue, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{venue.name}</h3>
                  <div className="flex items-center space-x-2 mb-4 text-yellow-600">
                    <Users className="h-5 w-5" />
                    <span className="font-semibold">{venue.capacity}</span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {venue.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Ideal for:</h4>
                    <p className="text-sm text-gray-600">{venue.ideal}</p>
                  </div>
                  
                  <button className="w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700 transition-colors font-semibold">
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Event Packages</h2>
            <p className="text-lg text-gray-600">Comprehensive packages tailored to your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
                <pkg.icon className="h-16 w-16 text-yellow-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                <p className="text-yellow-600 font-bold text-xl mb-6">{pkg.price}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-4">Package includes:</h4>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition-colors font-semibold">
                  Get Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Event Inquiry */}
      {/* Contact form for submitting event requests */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <Calendar className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Plan Your Event</h2>
              <p className="text-lg text-gray-600">Get in touch with our event planning specialists</p>
            </div>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600">
                  <option>Wedding</option>
                  <option>Corporate Meeting</option>
                  <option>Conference</option>
                  <option>Social Event</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600">
                  <option>1-25</option>
                  <option>26-50</option>
                  <option>51-100</option>
                  <option>101-200</option>
                  <option>201-300</option>
                  <option>300+</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements</label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  placeholder="Tell us about your event requirements..."
                ></textarea>
              </div>
              
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-yellow-600 text-white py-3 px-6 rounded-md hover:bg-yellow-700 transition-colors font-semibold"
                >
                  Submit Event Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;