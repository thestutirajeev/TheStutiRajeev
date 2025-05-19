import React, { useEffect, useRef, useState } from "react";

const ProjectSS = ({ images = [], onClose }) => {
  if (!images.length) return null; // don't render if no images
 
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="relative bg-[#EDE0D4] rounded-2xl shadow-2xl p-4 w-full max-w-3xl mx-2">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-2xl text-[#7F5539] font-bold hover:text-[#9C6644]"
        >
          &times;
        </button>

        {/* Image Slider */}
        <div
          className="flex flex-col items-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="max-h-[70vh] w-full object-contain rounded-md"
          />

          <div className="mt-4 flex gap-4">
            <button
              onClick={prevSlide}
              className="bg-[#B08968] text-white px-2 py-1 rounded hover:bg-[#A76D51]"
            >
              Prev
            </button>
            <button
              onClick={nextSlide}
              className="bg-[#B08968] text-white px-2 py-1 rounded hover:bg-[#A76D51]"
            >
              Next
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-2 gap-2">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`h-3 w-3 rounded-full ${
                  currentIndex === idx
                    ? "bg-[#7F5539]"
                    : "bg-[#B08968] opacity-50"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSS;
