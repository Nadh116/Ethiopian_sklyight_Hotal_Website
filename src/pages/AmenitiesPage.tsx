import React from 'react';
import { Dumbbell, Wifi, Car, Coffee, Utensils, Users, Heart, Shield, Phone, Clock } from 'lucide-react';

const AmenitiesPage = () => {
  const amenities = [
    {
      category: 'Wellness & Recreation',
      icon: Heart,
      items: [
        {
          name: 'Skylight Spa',
          description: 'Full-service spa offering traditional Ethiopian treatments and modern wellness therapies',
          hours: '6:00 AM - 10:00 PM',
          icon: Heart
        },
        {
          name: 'Fitness Center',
          description: 'State-of-the-art gym with modern equipment and personal training services',
          hours: '24/7 Access',
          icon: Dumbbell
        },
        {
          name: 'Swimming Pool',
          description: 'Rooftop infinity pool with panoramic views of Addis Ababa',
          hours: '6:00 AM - 10:00 PM',
          icon: Heart
        }
      ]
    },
    {
      category: 'Business Services',
      icon: Users,
      items: [
        {
          name: 'Business Center',
          description: 'Complete business facilities with printing, copying, and secretarial services',
          hours: '24/7 Access',
          icon: Users
        },
        {
          name: 'High-Speed WiFi',
          description: 'Complimentary high-speed internet throughout the hotel',
          hours: '24/7 Access',
          icon: Wifi
        },
        {
          name: 'Meeting Rooms',
          description: 'Fully equipped meeting spaces with audio-visual technology',
          hours: 'By Reservation',
          icon: Users
        }
      ]
    },
    {
      category: 'Transportation',
      icon: Car,
      items: [
        {
          name: 'Airport Shuttle',
          description: 'Complimentary shuttle service to and from Bole International Airport',
          hours: '24/7 Service',
          icon: Car
        },
        {
          name: 'Valet Parking',
          description: 'Secure parking with professional valet service',
          hours: '24/7 Service',
          icon: Car
        },
        {
          name: 'Car Rental',
          description: 'On-site car rental services with premium vehicles',
          hours: '8:00 AM - 6:00 PM',
          icon: Car
        }
      ]
    },
    {
      category: 'Dining & Entertainment',
      icon: Utensils,
      items: [
        {
          name: 'Room Service',
          description: '24-hour room service with extensive menu options',
          hours: '24/7 Service',
          icon: Utensils
        },
        {
          name: 'Coffee Bar',
          description: 'Authentic Ethiopian coffee bar with traditional ceremony',
          hours: '6:00 AM - 10:00 PM',
          icon: Coffee
        },
        {
          name: 'Rooftop Lounge',
          description: 'Sophisticated lounge with cocktails and city views',
          hours: '5:00 PM - 2:00 AM',
          icon: Utensils
        }
      ]
    }
  ];

  const services = [
    {
      name: 'Concierge Service',
      description: 'Personal assistance with reservations, tours, and local recommendations',
      icon: Shield,
      available: '24/7'
    },
    {
      name: 'Laundry & Dry Cleaning',
      description: 'Professional laundry and pressing services',
      icon: Shield,
      available: 'Daily'
    },
    {
      name: 'Babysitting Service',
      description: 'Professional childcare services for families',
      icon: Users,
      available: 'On Request'
    },
    {
      name: 'Medical Services',
      description: 'On-call medical assistance and first aid',
      icon: Shield,
      available: '24/7'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Amenities & Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our comprehensive range of luxury amenities and personalized services
          </p>
        </div>
      </div>

      {/* Amenities by Category */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {amenities.map((category, index) => (
              <div key={index}>
                <div className="flex items-center space-x-3 mb-8">
                  <category.icon className="h-8 w-8 text-yellow-600" />
                  <h2 className="text-3xl font-bold text-gray-800">{category.category}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.items.map((item, i) => (
                    <div key={i} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center space-x-3 mb-4">
                        <item.icon className="h-8 w-8 text-yellow-600" />
                        <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex items-center space-x-2 text-sm text-yellow-600">
                        <Clock className="h-4 w-4" />
                        <span>{item.hours}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600">Personalized services for your comfort and convenience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg text-center">
                <service.icon className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                <div className="text-xs text-yellow-600 font-semibold">
                  Available: {service.available}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spa Highlight */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Skylight Spa Experience</h2>
              <p className="text-gray-600 mb-6">
                Indulge in our signature spa treatments that combine traditional Ethiopian healing practices 
                with modern wellness techniques. Our expert therapists use locally sourced ingredients 
                and time-honored methods to rejuvenate your body and mind.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-800 mb-2">Traditional Treatments</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Ethiopian Coffee Body Scrub</li>
                    <li>• Honey & Teff Facial</li>
                    <li>• Shea Butter Massage</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-800 mb-2">Modern Wellness</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Deep Tissue Massage</li>
                    <li>• Hot Stone Therapy</li>
                    <li>• Aromatherapy Sessions</li>
                  </ul>
                </div>
              </div>
              
              <button className="bg-yellow-600 text-white px-8 py-3 rounded-md hover:bg-yellow-700 transition-colors font-semibold">
                Book Spa Treatment
              </button>
            </div>
            
            <div>
              <img
                src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Spa Treatment"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Services */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Phone className="h-12 w-12 text-yellow-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Need Assistance?</h2>
          <p className="text-lg mb-8">
            Our concierge team is available 24/7 to help you make the most of your stay
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-yellow-600" />
              <span>+251 11 123 4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-yellow-600" />
              <span>concierge@ethiopianskylighthotel.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmenitiesPage;