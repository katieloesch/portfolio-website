import React, { useState } from 'react';

import { arrowIcons } from '../../../assets/icons/icons_arrows';
import './AboutCarouselMobile.scss';

const AboutCarouselMobile = ({ slides, type }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex === slides.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex(slides.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  return (
    <div className={`slider ${type}-slider`}>
      <div className='slides-container'>
        {slides.map((slide, index) => {
          return (
            <div
              className={`slide ${
                index === slideIndex ? 'slide-active' : 'slide-hidden'
              }`}
              key={`slider-slide-${index}`}
            >
              {slide}
            </div>
          );
        })}
        <div className='btns-slider'>
          <button onClick={prevSlide} className='btn-slider-prev'>
            {arrowIcons.arrowLeft}
          </button>
          <button onClick={nextSlide} className='btn-slider-next'>
            {arrowIcons.arrowRight}
          </button>
        </div>
      </div>

      <div className='dots-slider'>
        {slides.map((img, index) => (
          <div
            key={`slider-${index}`}
            className={`dot-slider ${
              index === slideIndex ? 'active' : 'inactive'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AboutCarouselMobile;
