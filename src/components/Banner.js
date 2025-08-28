
import React, { useState, useEffect } from 'react'; 
 
const images = ['/images/banner1.jpg', '/images/banner2.jpg', '/images/banner3.jpg']; 
 
const Banner = () => { 
  const [currentIndex, setCurrentIndex] = useState(0); 
 
  useEffect(() => { 
    const timer = setInterval(() => { 
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length); 
    }, 8000); 
    return () => clearInterval(timer); 
  }, []); 
 
  return ( 
    <div className="w-full h-56 sm:h-72 md:h-96 rounded-lg overflow-hidden shadow-lg my-6"> 
      <img 
        src={images[currentIndex]} 
        alt={`Banner ${currentIndex + 1}`} 
        className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out" 
        key={images[currentIndex]}  
      /> 
    </div> 
  ); 
}; 
 
export default Banner;