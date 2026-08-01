import React from 'react';
import { Crown, Award, Users, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Ethiopian Skylight Hotel</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the story behind Ethiopia's premier luxury hotel and our commitment to exceptional hospitality.
          </p>
        </div>
      </div>

      {/* Story section telling the history of the hotel */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Ethiopian Skylight Hotel was founded in 2020 with a vision to create a world-class hospitality 
                experience that celebrates the rich heritage and warm hospitality of Ethiopia. Located in the 
                heart of Addis Ababa, we have quickly established ourselves as the preferred choice for 
                discerning travelers.
              </p>
              <p className="text-gray-600 mb-6">
                Our hotel seamlessly blends modern luxury with authentic Ethiopian culture, offering guests 
                an unforgettable experience that goes beyond traditional hospitality. From our elegantly 
                appointed rooms to our world-class dining experiences, every detail is crafted to exceed 
                your expectations.
              </p>
              <div className="flex items-center space-x-4">
                <Crown className="h-8 w-8 text-yellow-600" />
                <span className="text-lg font-semibold text-gray-800">Luxury Redefined</span>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hotel Interior"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and vision cards describing the hotel's purpose */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Heart className="h-12 w-12 text-yellow-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional hospitality services that showcase the beauty of Ethiopian culture 
                while delivering world-class luxury experiences. We strive to create lasting memories 
                for every guest through personalized service and authentic cultural immersion.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Crown className="h-12 w-12 text-yellow-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be recognized as the leading luxury hotel in East Africa, setting new standards 
                for hospitality excellence while preserving and celebrating Ethiopian heritage. 
                We aim to be the preferred destination for global travelers seeking authentic experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards section showcasing industry recognition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Awards & Recognition</h2>
            <p className="text-lg text-gray-600">Our commitment to excellence has been recognized globally</p>
          </div>
          
          {/* Three award cards celebrating hotel achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Best Luxury Hotel 2024</h3>
              <p className="text-gray-600">African Tourism Awards</p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Excellence in Service 2023</h3>
              <p className="text-gray-600">International Hotel Association</p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Cultural Heritage Award 2023</h3>
              <p className="text-gray-600">Ethiopian Tourism Board</p>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600">Meet the visionaries behind Ethiopian Skylight Hotel</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="General Manager"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Dawit Tekle</h3>
              <p className="text-yellow-600 font-medium mb-2">General Manager</p>
              <p className="text-gray-600 text-sm">20+ years of hospitality experience in luxury hotels worldwide</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Operations Director"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Hanan Mohammed</h3>
              <p className="text-yellow-600 font-medium mb-2">Operations Director</p>
              <p className="text-gray-600 text-sm">Expert in luxury hospitality operations and guest experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Executive Chef"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Rahel Assefa</h3>
              <p className="text-yellow-600 font-medium mb-2">Executive Chef</p>
              <p className="text-gray-600 text-sm">Culinary expert specializing in Ethiopian and international cuisine</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;