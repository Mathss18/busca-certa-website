"use client";

import { useEffect, useState } from "react";

interface CarouselProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
  noButtons?: boolean;
}

function Carousel({ images, autoPlay = true, interval = 6000, noButtons = false }: CarouselProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = (): void => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = (): void => {
    setActiveSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        handleNextSlide();
      }, interval);
      return () => clearInterval(timer);
    }
  }, [activeSlide, autoPlay, interval]);

  return (
    <div className="w-full h-40 bg-slate-600">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item w-full transition-opacity duration-500 ease-in-out top-0 left-0 ${
            activeSlide === index ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <img src={image} className="w-full" />
          {noButtons ? null : (
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <button className="btn btn-circle bg-gray-500 p-2 rounded-full" onClick={handlePrevSlide}>
                ❮
              </button>
              <button className="btn btn-circle bg-gray-500 p-2 rounded-full" onClick={handleNextSlide}>
                ❯
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Carousel;
