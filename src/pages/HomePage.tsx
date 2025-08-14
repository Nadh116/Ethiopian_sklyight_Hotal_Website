import React from 'react';
import HeroSection from '../components/HeroSection';
import BookingWidget from '../components/BookingWidget';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import WelcomeSection from '../components/WelcomeSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <BookingWidget />
      <WelcomeSection />
      <FeaturesSection />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;