import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Adopt a Tree, Change the World",
    description: "Join our mission to reforest the planet one tree at a time."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Breathe Life Into Our Planet",
    description: "Every tree planted helps combat climate change and restore biodiversity."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Become a Guardian of Nature",
    description: "Your contribution creates a greener future for generations to come."
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 500);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden pt-16">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          
          <div className={`relative z-20 h-full flex items-center justify-center text-center px-4 ${
            isAnimating ? 'opacity-0 transform translate-y-10' : 'opacity-100 transform translate-y-0'
          } transition-all duration-500`}>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 slide-in stagger-1">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 slide-in stagger-2">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 slide-in stagger-3">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors btn-animate">
                  Adopt Now
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-green-800 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 text-white transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 text-white transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-white w-8' : 'bg-white bg-opacity-50'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;