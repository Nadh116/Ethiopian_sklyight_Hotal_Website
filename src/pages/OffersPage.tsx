import React from 'react';
import { Star, Calendar, Users, Gift, Clock, Check } from 'lucide-react';

const OffersPage = () => {
  // Main promotional packages with pricing and inclusions
  const offers = [
    {
      title: 'Honeymoon Package',
      price: '$899',
      originalPrice: '$1,200',
      duration: '3 Days / 2 Nights',
      image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Celebrate your love with our romantic honeymoon package designed for newlyweds.',
      includes: [
        'Luxury suite accommodation',
        'Champagne and chocolates on arrival',
        'Couples spa treatment',
        'Romantic dinner for two',
        'Late checkout',
        'Complimentary breakfast'
      ],
      validity: 'Valid until December 31, 2025',
      popular: true
    },
    {
      title: 'Business Traveler Deal',
      price: '$150',
      originalPrice: '$220',
      duration: 'Per Night',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Perfect for business professionals with exclusive amenities and services.',
      includes: [
        'Executive room accommodation',
        'High-speed WiFi',
        'Business center access',
        'Complimentary breakfast',
        'Airport shuttle',
        'Late checkout'
      ],
      validity: 'Valid for stays until March 31, 2025',
      popular: false
    },
    {
      title: 'Family Fun Package',
      price: '$449',
      originalPrice: '$600',
      duration: '2 Days / 1 Night',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Create lasting memories with our family-friendly package for up to 4 people.',
      includes: [
        'Family suite accommodation',
        'Welcome gift for children',
        'Family breakfast',
        'Swimming pool access',
        'Babysitting service (2 hours)',
        'City tour voucher'
      ],
      validity: 'Valid until June 30, 2025',
      popular: false
    },
    {
      title: 'Extended Stay Offer',
      price: '$120',
      originalPrice: '$180',
      duration: 'Per Night (Min 7 nights)',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Save more with our extended stay package for guests staying a week or longer.',
      includes: [
        'Deluxe room accommodation',
        'Weekly housekeeping',
        'Laundry service',
        'Complimentary breakfast',
        'Gym access',
        'Concierge services'
      ],
      validity: 'Valid year-round',
      popular: false
    }
  ];

  // Limited-time seasonal deals with promo codes
  const seasonalOffers = [
    {
      title: 'Ethiopian New Year Special',
      description: 'Celebrate Enkutatash with 25% off all bookings',
      validUntil: 'September 30, 2025',
      code: 'NEWYEAR25'
    },
    {
      title: 'Timkat Festival Package',
      description: 'Experience the celebration with our special cultural package',
      validUntil: 'January 31, 2025',
      code: 'TIMKAT2025'
    },
    {
      title: 'Conference Season Deal',
      description: 'Special rates for business conferences and meetings',
      validUntil: 'May 31, 2025',
      code: 'BUSINESS30'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Special Offers</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover exclusive deals and packages designed to make your stay unforgettable
          </p>
        </div>
      </div>

      {/* Main Offers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Two-column grid highlighting each promotional offer */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {offers.map((offer, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
                {offer.popular && (
                  <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    Popular
                  </div>
                )}
                
                <div className="relative">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-md">
                    {offer.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{offer.title}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-yellow-600">{offer.price}</div>
                      <div className="text-sm text-gray-500 line-through">{offer.originalPrice}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Package includes:</h4>
                    <ul className="space-y-1">
                      {offer.includes.map((item, i) => (
                        <li key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                          <Check className="h-4 w-4 text-green-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{offer.validity}</span>
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

      {/* Seasonal Offers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Seasonal Offers</h2>
            <p className="text-lg text-gray-600">Limited-time deals celebrating Ethiopian culture and traditions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seasonalOffers.map((offer, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg border-2 border-yellow-200">
                <div className="flex items-center space-x-2 mb-4">
                  <Gift className="h-8 w-8 text-yellow-600" />
                  <h3 className="text-xl font-bold text-gray-800">{offer.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{offer.validUntil}</span>
                  </div>
                  <div className="bg-yellow-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
                    {offer.code}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty Program */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
                <h2 className="text-3xl font-bold text-gray-800">Skylight Rewards</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Join our exclusive loyalty program and enjoy special benefits, discounts, and personalized service. 
                Earn points with every stay and redeem them for free nights, upgrades, and exclusive experiences.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-800 mb-2">Member Benefits</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 10% discount on all stays</li>
                    <li>• Priority reservations</li>
                    <li>• Complimentary room upgrades</li>
                    <li>• Late checkout privileges</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-800 mb-2">Exclusive Perks</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Welcome amenities</li>
                    <li>• Special occasion recognition</li>
                    <li>• Members-only events</li>
                    <li>• Personalized service</li>
                  </ul>
                </div>
              </div>
              
              <button className="bg-yellow-600 text-white px-8 py-3 rounded-md hover:bg-yellow-700 transition-colors font-semibold">
                Join Skylight Rewards
              </button>
            </div>
            
            <div>
              <img
                src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Loyalty Program"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Terms & Conditions</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-4 text-sm text-gray-600">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">General Terms</h4>
                <ul className="space-y-1 pl-4">
                  <li>• All offers are subject to availability and may be withdrawn at any time</li>
                  <li>• Packages are non-refundable and non-transferable</li>
                  <li>• Valid government-issued ID required at check-in</li>
                  <li>• Minimum age requirement: 18 years</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Booking Policy</h4>
                <ul className="space-y-1 pl-4">
                  <li>• Advance booking required for all packages</li>
                  <li>• 48-hour cancellation policy applies</li>
                  <li>• Special dietary requirements must be specified in advance</li>
                  <li>• Group bookings (10+ people) may have different terms</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Payment Terms</h4>
                <ul className="space-y-1 pl-4">
                  <li>• Full payment required at time of booking</li>
                  <li>• Major credit cards accepted</li>
                  <li>• Prices are in USD and subject to applicable taxes</li>
                  <li>• Currency exchange rates may apply for international guests</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OffersPage;