import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  // Guest feedback entries with name, location, rating and comment
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      comment: 'Absolutely stunning hotel! The service was impeccable and the Ethiopian cultural touches made the experience truly memorable. Will definitely return.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Michael Chen',
      location: 'London, UK',
      rating: 5,
      comment: 'Perfect location in Addis Ababa with world-class amenities. The staff went above and beyond to ensure our business conference was successful.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Fatima Al-Rashid',
      location: 'Dubai, UAE',
      rating: 5,
      comment: 'The authentic Ethiopian dining experience was extraordinary. The hotel perfectly balances luxury with cultural authenticity.',
      image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Guests Say</h2>
          <p className="text-lg text-gray-600">Real experiences from our valued guests around the world</p>
        </div>
        
        {/* Grid of guest review cards pulled from the testimonials data */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="h-8 w-8 text-yellow-600 opacity-20 absolute -top-2 -left-2" />
                <p className="text-gray-600 italic pl-6">{testimonial.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;