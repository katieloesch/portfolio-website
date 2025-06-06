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
    <div className={'about-carousel-mobile'}>
      <div className='about-carousel-mobile__slides-container'>
        {slides.map((slide, index) => {
          return (
            <div
              className={`about-carousel-mobile__slide ${
                index === slideIndex
                  ? 'about-carousel-mobile__slide-active'
                  : 'about-carousel-mobile__slide-hidden'
              }`}
              key={`about-carousel-mobile__-slide-${index}`}
            >
              {slide}
            </div>
          );
        })}
        <div className='about-carousel-mobile__btns'>
          <button
            onClick={prevSlide}
            className='about-carousel-mobile__btn-prev about-carousel-mobile__btn'
          >
            {arrowIcons.arrowLeft}
          </button>
          <button
            onClick={nextSlide}
            className='about-carousel-mobile__btn-next about-carousel-mobile__btn'
          >
            {arrowIcons.arrowRight}
          </button>
        </div>
      </div>

      <div className='about-carousel-mobile__dots'>
        {slides.map((img, index) => (
          <div
            key={`about-carousel-mobile__dot-${index}`}
            className={`about-carousel-mobile__dot ${
              index === slideIndex
                ? 'about-carousel-mobile__dot-active'
                : 'about-carousel-mobile__dot-inactive'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AboutCarouselMobile;
