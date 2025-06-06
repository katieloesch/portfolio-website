import React, { useState } from 'react';

import { arrowIcons } from '../../../assets/icons/icons_arrows';
import './AboutCarousel.scss';

const AboutCarousel = ({ slides, type }) => {
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
    <div className={'about-carousel'}>
      <div className='about-carousel__slides-container'>
        {slides.map((slide, index) => {
          return (
            <div
              className={`about-carousel__slide ${
                index === slideIndex
                  ? 'about-carousel__slide-active'
                  : 'about-carousel__slide-hidden'
              }`}
              key={`slider-slide-${index}`}
            >
              {slide}
            </div>
          );
        })}
        <div className='about-carousel__btns'>
          <button
            onClick={prevSlide}
            className='about-carousel__btn about-carousel__btn-prev'
          >
            {arrowIcons.arrowLeft}
          </button>
          <button
            onClick={nextSlide}
            className='about-carousel__btn about-carousel__btn-next'
          >
            {arrowIcons.arrowRight}
          </button>
        </div>
      </div>

      <div className='about-carousel__dots'>
        {slides.map((img, index) => (
          <div
            key={`about-carousel__dot-${index}`}
            className={`about-carousel__dot ${
              index === slideIndex
                ? 'about-carousel__dot-active'
                : 'about-carousel__dot-inactive'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AboutCarousel;
