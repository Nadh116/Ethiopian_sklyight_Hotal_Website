import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      category: 'Exterior',
      images: [
        { url: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Hotel Exterior' },
        { url: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Hotel Entrance' },
        { url: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Hotel Garden' }
      ]
    },
    {
      category: 'Rooms & Suites',
      images: [
        { url: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Standard Room' },
        { url: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Deluxe Room' },
        { url: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Executive Suite' },
        { url: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Presidential Suite' }
      ]
    },
    {
      category: 'Dining',
      images: [
        { url: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Addis Restaurant' },
        { url: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'International Restaurant' },
        { url: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Rooftop Lounge' }
      ]
    },
    {
      category: 'Facilities',
      images: [
        { url: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Grand Ballroom' },
        { url: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Fitness Center' },
        { url: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Spa' },
        { url: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Swimming Pool' }
      ]
    }
  ];

  const allImages = galleryImages.flatMap(category => category.images);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % allImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(allImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(allImages[prevIndex]);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore the beauty and elegance of Ethiopian Skylight Hotel through our photo gallery
          </p>
        </div>
      </div>

      {/* Gallery Sections */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {galleryImages.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.images.map((image, imageIndex) => {
                  const globalIndex = galleryImages.slice(0, categoryIndex).reduce((acc, cat) => acc + cat.images.length, 0) + imageIndex;
                  return (
                    <div
                      key={imageIndex}
                      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
                      onClick={() => openLightbox(image, globalIndex)}
                    >
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          View Image
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Virtual Tour Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Virtual Tour</h2>
          <p className="text-lg text-gray-600 mb-8">
            Take a virtual walk through our hotel and experience the luxury before you arrive
          </p>
          
          <div className="bg-gray-800 rounded-lg p-8 text-white">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <div className="bg-gray-700 rounded-lg flex items-center justify-center h-96">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏨</div>
                  <h3 className="text-xl font-semibold mb-2">Virtual Tour Coming Soon</h3>
                  <p className="text-gray-300">Experience our hotel with an immersive 360° virtual tour</p>
                </div>
              </div>
            </div>
            <button className="bg-yellow-600 text-white px-8 py-3 rounded-md hover:bg-yellow-700 transition-colors font-semibold">
              Request Virtual Tour
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-3xl hover:text-yellow-600 transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-yellow-600 transition-colors z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-yellow-600 transition-colors z-10"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain"
            />
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
              <p className="text-lg font-semibold">{selectedImage.alt}</p>
              <p className="text-sm opacity-75">{currentIndex + 1} of {allImages.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;