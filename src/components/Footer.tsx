import React from 'react';
import { Crown, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Crown className="h-8 w-8 text-yellow-600" />
              <h3 className="text-xl font-bold">Ethiopian Skylight Hotel</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Experience luxury and Ethiopian hospitality at its finest in the heart of Addis Ababa.
            </p>
            {/* Social media icon links for the hotel */}
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-300 hover:text-yellow-600 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-300 hover:text-yellow-600 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-300 hover:text-yellow-600 cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-300 hover:text-yellow-600 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/about" className="hover:text-yellow-600 transition-colors">About Us</a></li>
              <li><a href="/rooms" className="hover:text-yellow-600 transition-colors">Rooms & Suites</a></li>
              <li><a href="/dining" className="hover:text-yellow-600 transition-colors">Dining</a></li>
              <li><a href="/events" className="hover:text-yellow-600 transition-colors">Events</a></li>
              <li><a href="/amenities" className="hover:text-yellow-600 transition-colors">Amenities</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-yellow-600" />
                <span>Bole, Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-600" />
                <span>+251 11 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-600" />
                <span>reservations@ethiopianskylighthotel.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for special offers and updates.</p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-yellow-600"
              />
              <button className="w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright bar displayed at the very bottom of the footer */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Ethiopian Skylight Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;